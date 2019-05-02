import React, {Component} from "react"
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator} from "react-native"
import Transition from "react-navigation-fluid-transitions/TransitionView";
import {colors} from "../../helpers/constants";
import Icon from "react-native-vector-icons/Ionicons"
import { backend } from "../../helpers/firebase";



const {height} = Dimensions.get("window");

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:"",
            password:""
        }

        console.log(this.props);
    }


    render(){
        return(
            <ScrollView
                contentContainerStyle={{height:height, backgroundColor:'white'}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity

                    style={{position:'absolute', top:16, right:16,height:25,width:80, borderWidth:1, borderColor:colors.primarydark,borderRadius:15,justifyContent:'center', alignItems:'center'}}
                    >
                    <Text
                        onPress={()=>{this.props.navigation.navigate("register")}}
                        style={{
                            fontWeight:'bold', color:colors.primarydark
                        }}>Sign Up</Text>

                    </TouchableOpacity>
                    <Transition shared='circle'>
                        <Image style={{height:100,width:100, resizeMode:'contain'}} source={require('../../assets/img/logo.png')}/>
                    </Transition>
                    <Text style={{fontSize:22, fontWeight: '500'}} allowFontScaling={true}>Welcome Back</Text>
                </View>
                <View style={{flex:2, paddingHorizontal:24}}>
                    <View style={{margin:8}}>
                        <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Email</Text>
                        <TextInput
                            keyboardType={"email-address"}
                            value={this.state.email}
                            onChange={(value)=>{
                                this.setState({email:value})
                            }}
                            style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                            underlineAndroid={colors.primarydark}
                            placeholder={"mintynana@gmail.com"}/>
                    </View>

                    <View style={{margin:8}}>
                        <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Password</Text>
                        <TextInput
                            onChange={(value)=>{
                                this.setState({password:value})
                            }}
                            value={this.state.password}
                            secureTextEntry={true}
                            style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                            placeholder={"*********"}/>
                    </View>

                    <View style={{margin:8,height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{color:colors.primary, fontSize:14}}>Sign In</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.screenProps.navigate("home");
                            }}
                            style={{borderRadius:30,height:60, width:60, backgroundColor:colors.primarydark, justifyContent:'center', alignItems:'center'}}>
                            <Icon name={"ios-arrow-round-forward"} color={"white"} size={24}/>
                        </TouchableOpacity>
                    </View>

                
                </View>
                
            </ScrollView>
        )
    }

    login = (email, password) => {
        //backend.auth.
    }

}

export {LoginPage}