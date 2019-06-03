import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Image } from 'react-native'

export class Geng extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    let {data} = this.props
    return (
      
      <TouchableOpacity
      onPress = {()=>{this.props.navigation.navigate("gengchat", {data})}}
      style={{height:80, margin:4, flexDirection:'row',alignItems: 'center',}}>
        <Image style={{height:60, width:60, borderRadius:4, resizeMode:'cover', backgroundColor: 'red'}} />
        <View style={{justifyContent:'center', margin:8}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>{data.name}</Text>
          <Text>{data.desc}</Text>
          <Text style={{fontSize:12}}><Text style={{fontWeight:'bold'}}>30</Text> members</Text>
        </View>
  </TouchableOpacity>
    )
  }
}

export default Geng
