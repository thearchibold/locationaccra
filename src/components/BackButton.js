import React, {Component} from "react"
import {TouchableOpacity, View, StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import {colors} from "../helpers/constants";



const BackButton = (props) => {

    return(
        <TouchableOpacity
            onPress={()=>{
                props.navigation.goBack();
            }}
            style={styles.icon_btn}>
            <Icon name={"ios-arrow-back"} size={24} color={colors.primarydark}/>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    icon_btn:{
        height: 50,
        width:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export {BackButton}