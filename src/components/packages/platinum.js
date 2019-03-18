import React from "react";
import {View, Text} from "react-native";


class Platinum extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:60, justifyContent:'center'}}>
                    <Text style={{fontSize:18, color:'white'}}>Platinum Package</Text>
                </View>
            </View>
        )
    }

}

export {Platinum}