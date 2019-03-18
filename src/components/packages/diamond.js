import React from "react";
import {View, Text} from "react-native";


class DiamondPackage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:60, justifyContent:'center'}}>
                    <Text style={{fontSize:18, color:'white'}}>Diamond Package</Text>
                </View>
            </View>
        )
    }

}

export {DiamondPackage}