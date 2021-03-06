import React, {Component} from "react";
import {View} from "react-native"
import {createBottomTabNavigator, createAppContainer} from "react-navigation"
import  {createFluidNavigator} from "react-navigation-fluid-transitions"
import {HomePage} from "./HomePage";
import {timeline} from "./Timeline";
import {socialnetork} from "./Social";
import {colors} from "../helpers/constants";
import {profile} from "./Profile";
import TourPage from "../components/virtual_tour/vrtour"
import PageTwo from "./pagetwo"
import Icon from "react-native-vector-icons/Ionicons"
import PackagesPage from "./HomePage/packagespage";
import {AddToTimeline} from "./Timeline/AddToTimeline";
import CalendarDetails from "./HomePage/calendardetails";
import {Authentication} from "./Authentication";
import SplashScreen from "./SplachScreen/SplashScreen";
import  ChatPage from "./Social/ChatPage"
import {CreateGeng} from "./Social/CreateGeng";
import GengDetails from "./Social/GengDetails";
import SearchGengs from "./Social/SearchGeng";


const HomeTabs = createAppContainer(createBottomTabNavigator({

        timeline:{
            screen:timeline,
            navigationOptions: ({navigation})=>({
                header:null,
                title:"SocialNetwork",
                tabBarIcon : ({focused, tintColor}) => {
                    const { routeName } = navigation.state;
                    return <Icon name={'ios-paper'} color={tintColor} size={22}/>
                }
            })
        },
        calendar:{
            screen:HomePage,
            navigationOptions: ({navigation})=>({

                header:null,
                tabBarIcon : ({focused, tintColor}) => {
                    return <Icon name={'ios-calendar'} color={tintColor} size={22}/>
                }

            })
        },


        networks:{
            screen:socialnetork,
            navigationOptions: ({navigation})=>({
                header:null,
                title:"SocialNetwork",
                tabBarIcon : ({focused, tintColor}) => {

                    return <Icon name={'md-git-network'} color={tintColor} size={22}/>
                }
            })
        },

        me:{
            screen:profile,
            navigationOptions: ({navigation})=>({
                header:null,
                title:"SocialNetwork",
                tabBarIcon : ({focused, tintColor}) => {

                    return <Icon name={'ios-contact'} color={tintColor} size={22}/>
                }
            })
        }
    },
    {
        initialRouteName:"timeline",
        lazy:false,
        tabBarOptions:{
            activeTintColor:colors.primarylight,
            inactiveTintColor:"gray",
            showLabel:false
        }
    }));



const Navigator = createAppContainer(createFluidNavigator({

        splashscreen:{
            screen:SplashScreen,

        },
        authentication:{
            screen:(({navigation})=><Authentication screenProps={navigation}/>),
        },

        home:{
            screen: (({navigation})=><HomeTabs  screenProps={navigation}/>),
            navigationOptions:({navigation})=>({
                header:null})
        },

        packages:{
            screen:PackagesPage,
            navigationOptions: ({navigation})=>({
                header:null
            })
        },
        posttimeline:{
            screen:AddToTimeline,
            navigationOptions: ({navigation})=>({
                tabBarVisible: false,
                header:null
            })
        },
        calenderdetails:{
            screen:CalendarDetails,
            navigationOptions: ({navigation})=>({
                header:null
            })
        },
        tour:{
            screen:TourPage,
            navigationOptions: ({navigation})=>({
                header:null
            })
        },
        gengchat:{
            screen:ChatPage,
            navigationOptions: ({navigation})=>({
                header:null
            })
        },
        creategeng:{
            screen:CreateGeng,
            navigationOptions: ({navigation})=>({
                header:null
            })
    },
    gengdetails:{
        screen:GengDetails,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    searchgeng:{
        screen:SearchGengs,
        navigationOptions: ({navigation})=>({
            header:null
        })
    }

    },
    {
        initialRouteName: "splashscreen"
    }));


class Navigation extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1}}>
                <Navigator/>
            </View>
        )
    }

}

export {Navigation}