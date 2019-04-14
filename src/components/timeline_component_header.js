import React, {Component} from "react"
import {Image, Platform, Text, View} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import {colors} from "../helpers/constants";
import {Separator} from "./separator";



const TimelineHeader = (props) => {
    return(
        <View>
            <View style={{flexDirection: 'row', alignItems:'center', height:50,flex:1, paddingHorizontal:4}}>
                <View style={{height:40, width: 40, borderRadius:20, backgroundColor: 'gray', margin:4}}>

                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{fontWeight: 'bold', color:'#000', fontSize:14}}>Archibold Bernard</Text>
                    <Text style={{ color:'#3b3b3b', fontSize:10}}>Tuesday, 12 June 2017  10:30am</Text>
                </View>
                <View style={{height:50, width:30, justifyContent:'center', alignItems:'center'}}>
                    <Icon name={Platform.OS === "android" ? "md-more" : "ios-more"} size={24} color={colors.primary}/>
                </View>
            </View>
        </View>
    )
};


export {TimelineHeader}