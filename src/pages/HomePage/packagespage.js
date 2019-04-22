import React from "react";
import {View, Text, StatusBar, TouchableOpacity, StyleSheet} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"
import {colors} from "../../helpers/constants";
import {DiamondPackage, GoldPackage, Platinum} from "../../components/packages/index";

export default class PackagesPage extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            active:"gold"
        };
        this.changeTab = this.changeTab.bind(this)
    }

    render(){



        return(
            <View>

            </View>

        )

    }

    changeTab = (tab) =>{
        this.setState({active:tab})
    }
}

const styles = StyleSheet.create({
    tab_active:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems: 'center',
        padding:2
    },
    text_active:{
        color:colors.primary,
        fontSize:12
    },
    tab_inactive:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:2
    },
    text_inactive:{
        color:"#dedede",
        fontSize:10
    }
})
