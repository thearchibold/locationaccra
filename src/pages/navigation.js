import React, {Component} from "react";
import {createBottomTabNavigator, createAppContainer} from "react-navigation"
import {MainApp} from "./HomePage";
import {timeline} from "./Timeline";
import PackagesPage from "./HomePage/packagespage";
import {socialnetork} from "./Social";
import {colors} from "../helpers/constants";
import {profile} from "./Profile";
import Icon from "react-native-vector-icons/Ionicons"

const MainPageTabs = createAppContainer(createBottomTabNavigator({

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
            screen:MainApp,
            navigationOptions: ({navigation, screenProps})=>({

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

export {MainPageTabs}