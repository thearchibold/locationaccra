import React,{Component} from "react"
import {createAppContainer, createStackNavigator} from "react-navigation"
import {createFluidNavigator} from "react-navigation-fluid-transitions"
import {Timeline} from "./Timeline";
import Homepage from "../HomePage/homepage";
import {AddToTimeline} from "./AddToTimeline";

const timeline = createAppContainer(createFluidNavigator({
   timeline:{
       screen:Timeline,
       navigationOptions: ({navigation})=>({
           header:null
       })
   },
    // posttimeline:{
    //    screen:AddToTimeline,
    //     navigationOptions: ({navigation})=>({
    //         tabBarVisible: false,
    //         header:null
    //     })
    // }
},{

    initialRouteName:"timeline",
    navigationOptions: { gesturesEnabled: true }

}));

export {timeline}



