import React from "react";
import {View, Text, Platform, StyleSheet, StatusBar,Image, ScrollView, Animated, TouchableOpacity, TouchableNativeFeedback} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient';
import {Transition} from "react-navigation-fluid-transitions"
import {colors} from "../../helpers/constants";
import VideoPlayer from "../../components/video"
import {Separator} from "../../components/separator";


const NAVBAR_HEIGHT = 50;
const STATUS_BAR_HEIGHT = 0;
const AnimatedListView = Animated.createAnimatedComponent(ScrollView); //whatever animation view it is

class Homepage extends React.Component{

    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
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

    componentDidMount() {
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

            <View style={{flex:1}}>
                <StatusBar backgroundColor={colors.primarydark} barStyle="light-content" />

                {/*List body*/}
                <AnimatedListView
                    style={{flex:1, paddingTop: NAVBAR_HEIGHT}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                        { useNativeDriver: true },
                    )}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollEndDrag={this._onScrollEndDrag}
                >
                    <View style={{backgroundColor: 'white', paddingBottom:60}}>
                        <View style={{height:320}}>
                            <View style={{height:40, paddingHorizontal:8, flexDirection:"row",alignItems:'center', justifyContent: 'space-between'}}>
                                <View style={{height: 24, alignItems:'center', flexDirection:'row'}}>
                                    <Text style={{color:colors.primarylight, fontSize:18}}>Mood</Text><Text style={{color:'gray',fontSize:18, fontWeight:'bold'}}>Board</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={()=>{this.props.navigation.navigate('moodboard')}}
                                    style={{justifyContent:"center",backgroundColor:colors.primary, height:24,borderRadius:12, paddingHorizontal:12}}>
                                    <Text style={{color:"white"}}>View all</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{height:240, flex:1}}>
                                <VideoPlayer/>
                                {/*<Image source={require('../assets/img/slider2.jpeg')} style={{flex:1, alignSelf:'center',height:240, width:'100%', resizeMode: 'cover'}}/>*/}
                            </View>
                            <View style={{ height:40, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <View  style={{height:10, width:10, borderRadius:5,margin:4, backgroundColor:colors.primarylight}}/>
                                <View  style={{height:10, width:10, borderRadius:5,margin:4,borderWidth:1,  borderColor:colors.primarylight}}/>
                                <View  style={{height:10, width:10, borderRadius:5,margin:4,borderWidth:1,  borderColor:colors.primarylight}}/>
                                <View  style={{height:10, width:10, borderRadius:5,margin:4,borderWidth:1,  borderColor:colors.primarylight}}/>
                                <View  style={{height:10, width:10, borderRadius:5,margin:4,borderWidth:1,  borderColor:colors.primarylight}}/>
                            </View>
                        </View>




                        {/*Moods moved to the buttom comes in later*/}

                        <Separator/>
                        <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                            colors={[ colors.primarylight , colors.primary, colors.primary, colors.primarydark]} style={{height:40, borderRadius:30, backgroundColor:colors.primarylight, margin:16}} >
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('packages')}}
                                style={{height:40, borderRadius:30,justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                                <Icon name={"ios-basket"} color={"white"} style={{margin:8}} size={20}/>
                                <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>
                                    Packages
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <Separator/>





                        {/*<View style={{height:1, backgroundColor:'#dedede', marginVertical:16}}/>*/}

                        {/*Calender*/}
                        <View style={{height: 24, alignItems:'center', flexDirection:'row',padding:8, justifyContent:'space-between'}}>
                            <Text style={{color:"#343434", fontSize:18}}>Calendar</Text>
                            <Icon name={"md-calendar"} size={22} color={colors.primarylight}/>
                        </View>
                        <Text style={{margin:8, color:'gray', textAlign: 'center'}}>Upcoming events - December 2019 in Ghana - The Year of Return</Text>


                        <View style={{ alignItems:'center', flexDirection:'row', padding:12}}>
                            <Text>Phase One</Text>
                            <View style={{backgroundColor:colors.primarylight, height:1,marginHorizontal:4, flex:1}}/>
                        </View>

                        <TouchableOpacity
                            onPress={()=>{this.props.navigation.navigate('calendardetails', {image:"slider3.jpg",id:"live"})}}
                            style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>24</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​ ​LiveWyred​ </Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>It is Christmas Eve and you’re in Ghana. You’ll stop by one of our Hotel
                                        Partners (JobyCo) to pick up all tickets, bands, general information and updates to your
                                        itinerary. Make sure you get some rest after, because at night, LiveWyred is premiering their
                                        biggest December concert and party to usher in the festivities. P.S keep an eye out for
                                        fireworks.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Transition shared={"live"}>
                                        <Image source={require('../../assets/img/slider3.jpg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                    </Transition>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{this.props.navigation.navigate('calendardetails',{id:"1920"})}}
                            style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>25</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​ 19 | 25​ </Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>On Christmas day, Location Accra welcomes you to the biggest and most
                                        luxurious Christmas pool party in Africa! P.S keep an eye out for chocolate girls in bikinis.
                                        “There are a lot of ideas and resources being poured into this, we are going to make it fun, sexy
                                        and plush. The goal is to trend on twitter” - Kofi Anim Danso, CEO Location Accra, Organizers
                                        of 1925.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Transition shared={"1920"}>
                                        <Image source={require('../../assets/img/slider2.jpeg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                    </Transition>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>26</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​ Little Havana​ </Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>Legend has it, you can hear the cheers of Little Havana from miles away.
                                        This Cuban Themed Party in the hills of Aburi has been running for 3 years, with tickets and
                                        reservations sold out weeks in advance. Think white dresses, strong liquor, cigars and the most
                                        energetic DJ line up filling the hills with non-stop Afrobeats. P.S keep an eye out on the drive
                                        up, for sweeping panoramic hill-top views of Accra.
                                        “The quick brown fox jumps over the lazy dog...” - Kofi Biney, Dramani Payida - Chairmen, Little
                                        Acre Hotel. Organizers of Little Havana.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/logo.png')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>27</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​ Detty Rave​ </Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>Afrobeat superstar Mr. Eazi does not spare a penny when it comes to
                                        putting together his annual concert and party. Set right on the beach, this rave features
                                        performances from local and international Afrobeats artists and delivers on energy. It’s called
                                        the Detty Rave for a reason. P.S, You will need an extra pair of slippers</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/lap.jpeg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>28</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​ Afrochella​ </Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>Have you ever been to a festival this spiritual? Afrochella is now a mainstay
                                        in Ghana’s december events line up. As part of an enterprising effort by its organizers to
                                        connect the African continent and propagate the culture, this Afrobeats festival showcases
                                        culture, art and music performances from the African continent. P.S keep an eye out for the
                                        beautiful installations and activations</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/slider3.jpg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>
                        <Separator/>
                        <View style={{ alignItems:'center', flexDirection:'row', padding:12}}>
                            <Text>Phase Two</Text>
                            <View style={{backgroundColor:colors.primarylight, height:1,margin:4, flex:1}}/>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>29</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1,backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}} allowFontScaling={true}>​​ Community Participation and Outreach​</Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>YWe don’t know how you’ll take this but umm,
                                        Location Accra believes in Ghana and its sustainable future. It is why on the last sunday of the
                                        year, we are partnering with community-conscious companies to create workshops, set up
                                        fundraising initiatives and provide investment opportunities that allows you to participate in the
                                        socio-economic development of Ghana, hand in hand with the natives themselves. P.S, this is
                                        where you contribute beyond the fun. Be excited!</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/logo.png')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>30</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​Central Region Tour​</Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>You’re starting the second phase of your trip with this 2 hour ride
                                        to the Central region of Ghana. You will visit Ghana’s most visited historical sites - learn aboutthe Slave Castles of Cape-Coast and follow up with a nerve wracking walk on the famous
                                        rope-canopies elevated over the Kakum Forest Reserve.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/slider1.jpeg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>31</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​​ Accra City Food Crawl</Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>Ghanaian dishes are famous for its flavor and heartines, and
                                        there is no better way to experience the culture than to allow your taste-buds to enjoy bites of
                                        the beautiful Ghanaian cuisine at our partnering restaurants, while sightseeing and
                                        souvenir-shopping in the nation's capital</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/slider3.jpg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>1</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​Shai Hills Reserve</Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>You love animals, we love animals so we are going on an animal
                                        adventure! You will have the opportunity to spend time with some baboons and wild species at
                                        this nature reserve just outside Accra. Get your treats and cameras ready, if you’re nice, you
                                        just might capture the shot of your lifetime.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/slider2.jpeg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding:4 , flexDirection:'row', margin:4}}>
                            <View style={{height:40,margin:4, width:40, borderRadius:20, backgroundColor:colors.primarylight, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>2</Text>
                            </View>

                            <View style={{borderRadius:4,flex:1, height:80, backgroundColor:'#fefefe', flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>​Eastern Region Tour​</Text>
                                    <Text numberOfLines={3} allowFontScaling={true}>It’s the last day on the calendar. You’re exhausted, so how about
                                        a stroll in Ghana’s romantic Aburi Gardens, then plunge into the twin waterfalls at Boti for a
                                        relaxing end to your vacation. P.S keep an eye out for the Umbrella Rock.</Text>
                                </View>

                                <View style={{margin:4  }}>
                                    <Image source={require('../../assets/img/slider1.jpeg')} style={{flex:1, alignSelf:'center', height:80, width:80,resizeMode: 'cover', borderRadius:4,}}/>
                                </View>
                            </View>
                        </View>

                    </View>

                </AnimatedListView>

                {/*Header*/}
                <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }] }]}>
                    <Animated.View style={[styles.title, { opacity: navbarOpacity }]}>
                        {/*<Image height={40} width={null} resizeMode={'cover'} source={require('../assets/img/logo.png')}/>*/}
                        <Text style={{color:"white", fontSize:18}}>ACTIVITIES</Text>
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

        backgroundColor: colors.primary,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        height: NAVBAR_HEIGHT,
        justifyContent:"center",
        paddingTop:12,
        paddingLeft:8,
        paddingRight:8
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

export default Homepage







{/*<View style={{height: 24, alignItems:'center', flexDirection:'row',padding:8}}>*/}
{/*<Text style={{color:colors.primarylight, fontSize:18}}>Mood</Text><Text style={{color:'gray',fontSize:18, fontWeight:'bold'}}>Board</Text>*/}
{/*</View>*/}
{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>TRAVEL WITH US AD</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>DECEMBER IS COMING AD</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{fontSize:18}}>KAKUM VIDEO</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>LITTLE HAVANA</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>ACCRA CITY TOUR</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>GROOVE PARTY BUS</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}

{/*<TouchableNativeFeedback style={{height:50, flex:1 }}>*/}
{/*<View style={{height:50, flex:1, flexDirection:'row',padding:8, justifyContent:"space-between", alignItems:'center'}}>*/}
{/*<Text style={{ fontSize:18}}>AKWAMU VIDEO</Text>*/}
{/*<Icon size={18} name={"ios-arrow-dropright"} color={colors.primarylight}/>*/}
{/*</View>*/}
{/*</TouchableNativeFeedback>*/}