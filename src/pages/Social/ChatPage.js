import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from "../../helpers/constants";
import Icon from "react-native-vector-icons/Ionicons"
import {BackButton} from "../../components/BackButton";

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{height:50, flexDirection:'row', alignItems:'center', backgroundColor:colors.primary}}>
            <BackButton navigation={this.props.navigation} color={"white"}/>
            <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                <View style={{height:30, width: 30, borderRadius:20, backgroundColor:'red'}}>
                </View>
                <Text style={{color:"white", fontWeight: 'bold', marginLeft:8, fontSize:16}}>Group name</Text>
            </View>
            <TouchableOpacity style={{width:40, justifyContent: 'center', alignItems:'center'}}>
                <Icon name={"md-more"} color={"white"} allowFontScaling={true} size={24}/>
            </TouchableOpacity>
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