import React, {Component} from "react"
import {Animated, Platform, ScrollView, StyleSheet,Image, Text, View, TouchableNativeFeedback, FlatList} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {colors, url} from "../../helpers/constants";
import {Separator} from "../../components/separator";
import {TimelineImage, TimelineText, TimelineVideo} from "../../components/timeline_components";
import { backend } from "../../helpers/firebase";




const NAVBAR_HEIGHT = 50;
const STATUS_BAR_HEIGHT = 0;
const AnimatedListView = Animated.createAnimatedComponent(ScrollView); //whatever animation view it is

class Timeline extends Component{


    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
            timelinedata:[],
            scrollAnim,
            offsetAnim,
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                    }),
                    offsetAnim,
                ),
                0,
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            ),

        }
    }

    componentWillMount(){
        let temp = this.state.timelinedata
        backend.database().ref().child(url.TIMELINE).on('value',(snapshot)=>{
            //this.setState({timelinedata:snapshot.val})
           //alert(snapshot.key)
            temp.push({
                key:snapshot.key,
                value:snapshot.val()
            })

            this.setState({timelinedata:temp})
        })
        
    }


    componentDidMount(){
        this.state.scrollAnim.addListener(({ value }) => {
            // This is the same calculations that diffClamp does.
            const diff = value - this._scrollValue;
            this._scrollValue = value;
            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, 0),
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            );
        });
        this.state.offsetAnim.addListener(({ value }) => {
            this._offsetValue = value;
        });
    }


    render(){
        //alert(JSON.stringify(this.props));
        const { clampedScroll } = this.state;

        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
            extrapolate: 'clamp',
        });
        const navbarOpacity = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return(
            <View style={{flex:1, backgroundColor:'white'}}>





                <AnimatedListView
                    style={{flex:1,height:'100%', paddingTop: NAVBAR_HEIGHT}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                        { useNativeDriver: true },
                    )}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollEndDrag={this._onScrollEndDrag}
                >


                   <TouchableNativeFeedback
                       onPress={()=>{
                           this.props.screenProps.navigate("posttimeline");
                       }}
                   >
                       <View

                           style={{height:60, paddingLeft:8, flexDirection:'row', alignItems:'center', backgroundColor:'white',width:'100%', flex:1, borderBottomWidth:0.5, borderBottomColor:'gainsboro'}}>
                           <Image style={{height:40,borderRadius:4, width:40}} resizeMode={'cover'} source={require("../../assets/img/slider1.jpeg")}/>
                           <Text style={{fontSize:18,flex:1, color:"gray", margin:4}}>Whats ganging up...</Text>
                       </View>


                   </TouchableNativeFeedback>
                   <Separator/>
                   <FlatList
                   extraData={this.state}
                   data={this.state.timelinedata}
                   keyExtractor={(item, index)=> {return index.toString}}
                   renderItem={({item})=>{
                       console.log(item)
                       if(item.value.type === 'text'){
                        return(<TimelineText data={item.value}/>)
                       }
                       if(item.value.type === 'image'){
                        return(<TimelineImage data={item.value}/>)
                       }
                   }}
                   ItemSeparatorComponent={()=> <Separator/>}
                   />
                    

                    <Separator/>

                    {/* <TimelineText/>

                    <Separator/>

                    <TimelineVideo/>

                    <Separator/> */}




                    <View style={{height:60}}/>
                </AnimatedListView>


                {/*Header*/}
                <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }] }]}>
                    <Animated.View style={[styles.title, { opacity: navbarOpacity }]}>
                        {/*<Image height={40} width={null} resizeMode={'cover'} source={require('../assets/img/logo.png')}/>*/}
                        <Text style={{color:"white",textAlignVertical:'center', fontSize:18, letterSpacing: 1.5}}>TIMELINE</Text>
                    </Animated.View>
                </Animated.View>


            </View>
        )
    }



    _onScrollEndDrag = () => {
        this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
    };

    _onMomentumScrollBegin = () => {
        clearTimeout(this._scrollEndTimer);
    };

    _onMomentumScrollEnd = () => {
        // Code to handle scroll end animation will go here.
        const toValue = this._scrollValue > NAVBAR_HEIGHT &&
        this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
            ? this._offsetValue + NAVBAR_HEIGHT
            : this._offsetValue - NAVBAR_HEIGHT;

        Animated.timing(this.state.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    componentWillUnmount() {
        // Don't forget to remove the listeners!
        this.state.scrollAnim.removeAllListeners();
        this.state.offsetAnim.removeAllListeners();
    }
}


const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginBottom:2,
        backgroundColor: colors.primary,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        height: NAVBAR_HEIGHT,
        justifyContent:"center",
        alignItems:'center',
        paddingLeft:8,
        paddingRight:8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title:{
        fontWeight: "bold",
        height:40,
        overflow: 'hidden',
        overlayColor: 'orangered',
        justifyContent:'center',
        flexDirection:'row',


    }
});



export {Timeline}