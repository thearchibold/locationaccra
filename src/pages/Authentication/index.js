import {createAppContainer} from "react-navigation"
import React, {Component} from "react"
import {View} from "react-native"
import {createFluidNavigator} from "react-navigation-fluid-transitions"
import {LoginPage} from "./login";
import {RegisterPage} from "./register";




const Authentication = createAppContainer(createFluidNavigator({
    login:{
        screen:LoginPage,
        navigationOptions:(({navigation})=>({
            header:null
        }))
    },

    register:{
        screen:RegisterPage,
        navigationOptions:(({navigation})=>({
            header:null
        }))
    }
},{
    initialRouteName:'login'
}));

export {Authentication}