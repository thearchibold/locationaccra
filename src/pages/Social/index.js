import React,{Component} from "react"
import {createAppContainer, createStackNavigator} from "react-navigation"
import {createFluidNavigator} from "react-navigation-fluid-transitions"
import {SocialNetwork} from "./SocialNetwork";

const socialnetork = createAppContainer(createFluidNavigator({
    socialnetwork:{
        screen:SocialNetwork,
        navigationOptions: ({navigation})=>({
            header:null
        })
    }
    
},{

    initialRouteName:"socialnetwork",
    navigationOptions: { gesturesEnabled: true }

}));

export {socialnetork}



