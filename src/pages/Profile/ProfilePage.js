import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions} from  "react-native";
import LinearGradient from "react-native-linear-gradient"
import {colors} from "../../helpers/constants";


class ProfilePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            gradient_height:0
        }
    }


    componentWillMount(){
       const {height} = Dimensions.get("window");
       this.setState({gradient_height:Math.ceil(height/3)})
    }
    render() {
        return (
            <View>
                <LinearGradient
                    style={{height:this.state.gradient_height}}
                    start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                    colors={[colors.primarydark , colors.primary, colors.primary, colors.primarylight]}>
                    <View style={{height:'100%',flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={{height:80, width:80, borderWidth:2, borderColor:'white', borderRadius:40}}>

                        </View>
                    </View>
                </LinearGradient>
                <View style={{height:60, }}>

                </View>

            </View>
        );
    }

}


export {ProfilePage}