import React from "react";
import {View, Text, StatusBar, TouchableOpacity} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome"
import {colors} from "../helpers/constants";

export default class PackagesPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <LinearGradient colors={[colors.primarydark, colors.primary]} style={{flex:1}}>
                <StatusBar backgroundColor={colors.primarydark} barStyle="light-content" />
                <View style={{height:54, flexDirection:'row', alignItems:'center', paddingHorizontal:8}}>
                    <TouchableOpacity
                     onPress={()=>{
                         this.props.navigation.goBack();
                     }}>
                        <Icon allowFontScaling={true} size={24} name={"arrow-left"} color={"white"}/>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        )

    }
}
