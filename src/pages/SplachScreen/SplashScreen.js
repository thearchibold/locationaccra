import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import {Transition} from "react-navigation-fluid-transitions"
import { backend } from "../../helpers/firebase"

export default class SplashScreen extends Component {


    componentDidMount(){
        setTimeout(()=>{
          let user = backend.auth().currentUser;
         // alert(JSON.stringify(user));
          if(user){
              this.props.navigation.navigate("home")
          }else{
              this.props.navigation.navigate("authentication")
          }
        }, 1500)
    }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'white'}}>
            <Transition shared='circle'>
                 <Image style={{height:100,width:100, resizeMode:'contain'}} source={require('../../assets/img/logo.png')}/>
            </Transition>  
      </View>
    )
  }
}