import {createAppContainer} from "react-navigation"
import React, {Component} from "react"
import {createFluidNavigator} from "react-navigation-fluid-transitions"

import Homepage from "./homepage"
import PageTwo from "../pagetwo"
import PackagesPage from "./packagespage"
import CalendarDetails from "./calendardetails"
import TourPage from "../../components/virtual_tour/vrtour"
import  MoodBoard from './moodboard'

const MainApp = createAppContainer(createFluidNavigator({
    pageone:{
        screen:Homepage,
        navigationOptions: ({navigation, screenProps})=>({
            header:null
        })
    },
    packages:{
        screen:PackagesPage,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    pagetwo:PageTwo,

    calendardetails:{
        screen:CalendarDetails,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    tour:{
       screen:TourPage
    },
    moodboard:{
        screen:MoodBoard,
        navigationOptions:({navigation})=>({
            title:"MoodBoard"
        })
    }

},{
    initialRouteName:"pageone",
    navigationOptions: { gesturesEnabled: true }
}));

export {MainApp}