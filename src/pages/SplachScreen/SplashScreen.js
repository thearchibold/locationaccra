import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import {Transition} from "react-navigation-fluid-transitions"


export default class SplashScreen extends Component {


    componentDidMount(){
        setTimeout(()=>{
          this.props.navigation.navigate("authentication")
        }, 2000)
    }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <Transition shared='circle'>
                 <Image style={{height:100,width:100, resizeMode:'contain'}} source={require('../../assets/img/logo.png')}/>
            </Transition>  
      </View>
    )
  }
}