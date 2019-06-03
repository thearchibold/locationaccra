import React,{Component} from "react"
import {View, Text, Animated, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, FlatList} from "react-native"
import {colors} from "../../helpers/constants";
import { Separator } from "../../components/separator";
import  Icon from "react-native-vector-icons/Ionicons"
import Geng from "../../components/Geng";
import { getAllGengs } from "../../helpers/functions";



const NAVBAR_HEIGHT = 50;
const STATUS_BAR_HEIGHT = 0;
const AnimatedListView = Animated.createAnimatedComponent(ScrollView); //whatever animation view it is


class SocialNetwork extends Component{


    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;


    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
            gengs:[],
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

    componentWillMount() {
        getAllGengs().then(data => {
            console.log("social ", data)
            this.setState({gengs:data})
        });
    }



    componentDidMount(){
        console.log(this.props);
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
            <View style={{flex:1, backgroundColor:'white', height:'100%'}}>


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
                
                    <TouchableOpacity
                        onPress={()=>{this.props.screenProps.navigate("searchgeng")}}
                        style={{ height: 46, flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                        <Icon name={"ios-search"} size={24} color={colors.primary}/>
                        <Text style={{marginLeft: 8, fontSize:16}}>Search gengs</Text>
                    </TouchableOpacity>
                    
                    <View style={{ backgroundColor: 'whitesmoke', height: 40, justifyContent: 'center', padding: 8 }}>
                        <Text style={{color:colors.primarydark, fontWeight:'bold'}}>My Gengs</Text>

                    </View>

                    <FlatList
                        style={{borderTopColor: 'gainsboro',borderTopWidth: 1,}}
                        data={this.state.gengs}
                        keyExtractor={(_item, index) => { return String(index) }}
                        renderItem={({ item, _index }) => {
                            return <Geng navigation={this.props.screenProps} data={item}/>
                        }}
                        
                    />                   


               
                    

               
                </AnimatedListView>

                <TouchableOpacity
                    onPress={()=>{
                        this.props.screenProps.navigate("creategeng")
                    }}
                    style={{
                    justifyContent:'center',
                    alignItems:'center',
                    height:50, width:50,
                    borderRadius:30, backgroundColor:colors.primarydark, position: 'absolute', right:16, bottom:16}}>
                    <Icon name={"ios-add"} color={"white"} size={28}/>
                </TouchableOpacity>

                <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }] }]}>
                    <Animated.View style={[styles.title, { opacity: navbarOpacity }]}>
                        {/*<Image height={40} width={null} resizeMode={'cover'} source={require('../assets/img/logo.png')}/>*/}
                        <Text style={{color:"white",textAlignVertical:'center', fontSize:18, letterSpacing: 1.5}}>GENGS</Text>
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


export {SocialNetwork}