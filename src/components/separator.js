import React, {Component} from "react"
import {View} from "react-native"



const Separator = (props) =>{
   return(
       <View style={{
           height:props.height || 20,
           backgroundColor:props.color || "whitesmoke",
           marginHorizontal:props.marginHorizontal || 0,
           marginVertical:props.marginVertical || 0

       }}
       />
   )
};

export {Separator}