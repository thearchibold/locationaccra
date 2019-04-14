import React,{Component} from "react"
import {createAppContainer, createStackNavigator} from "react-navigation"
import {createFluidNavigator} from "react-navigation-fluid-transitions"
import {ProfilePage} from "./ProfilePage";

const profile = createAppContainer(createFluidNavigator({
    profile:{
        screen:ProfilePage,
        navigationOptions: ({navigation})=>({
            header:null
        })
    }
},{

    initialRouteName:"profile",
    navigationOptions: { gesturesEnabled: true }

}));

export {profile}



