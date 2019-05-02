import {createAppContainer} from "react-navigation"
import React, {Component} from "react"
import {View} from "react-native"
import {createFluidNavigator} from "react-navigation-fluid-transitions"

import Homepage from "./homepage"
import PackagesPage from "./packagespage"
import CalendarDetails from "./calendardetails"
import TourPage from "../../components/virtual_tour/vrtour"
import  MoodBoard from './moodboard'

const HomePage = createAppContainer(createFluidNavigator({
    pageone:{
        screen:Homepage,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },


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



export {HomePage}