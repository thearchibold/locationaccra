import React from "react";
import {View, Text} from "react-native";
import {colors} from "../../helpers/constants";

class GoldPackage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:60, justifyContent:'center', margin:16}}>
                    <Text style={{fontSize:24, color:'white'}}>Gold Package</Text>
                </View>
                <View style={{flexDirection:'row', height:40, alignItems:'center', padding:8}}>
                    <View style={{height:10, width:10, borderRadius:5, backgroundColor:colors.primarylight}} />
                    <Text style={{fontSize:18, color:'gray', margin:8}}>Afrochella</Text>
                </View>

            </View>
        )
}

}

export {GoldPackage}