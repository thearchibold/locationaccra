import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import {colors} from "../../helpers/constants";
import Icon from "react-native-vector-icons/Ionicons"
import { BackButton } from "../../components/BackButton";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened:false
    };
  }

  render() {
    let { data } = this.props.navigation.state.params;
    
    return (
      <View
        onPress={()=>{alert("page")}}
        style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{height:50, flexDirection:'row', alignItems:'center', backgroundColor:colors.primary}}>
            <BackButton navigation={this.props.navigation} color={"white"}/>
            <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                <View style={{height:30, width: 30, borderRadius:20, backgroundColor:'red'}}>
                </View>
            <View>
              <Text style={{ color: "white", fontWeight: 'bold', marginLeft: 8, fontSize: 16 }}>{data.name}</Text>
              {/* <Text>{data.desc}</Text> */}
                </View>
          </View>
          <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate("gengdetails")}}
                style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={"ios-settings"} color={"white"} allowFontScaling={true} size={24}/>
              </TouchableOpacity>  

                  
            
          



        </View>

        

        <FlatList
          style={{flex:1,}}
        />



        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center',  }}>
          <TextInput placeholder={"Say something..."}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginBottom:2,
    backgroundColor: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    height: 50,
    justifyContent:"center",

    paddingLeft:8,
    paddingRight:8,
    shadowOffset: {
        width: 0,
        height: 1,
    }
}
}
);