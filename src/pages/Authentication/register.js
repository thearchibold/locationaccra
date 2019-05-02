import React, {Component} from "react"
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from "react-native"
import Transition from "react-navigation-fluid-transitions/TransitionView";
import Icon from "react-native-vector-icons/Ionicons"
import {colors} from "../../helpers/constants";
import { firebase } from "../../helpers/firebase";

const {height} = Dimensions.get("window");

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            email:"",
            password:"",
            phone:""
        }


    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                    style={{height:50, width:50, justifyContent:'center', alignItems:'center'}}>
                    <Icon name={"ios-arrow-back"} size={24} color={colors.primarydark}/>
                </TouchableOpacity>
                <ScrollView style={{height:height, backgroundColor:'white'}}>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>

                        <Transition shared='circle'>
                            <Image style={{height:80,width:100, resizeMode:'contain'}} source={require('../../assets/img/logo.png')}/>
                        </Transition>
                        <Text style={{fontSize:22, fontWeight: '500'}} allowFontScaling={true}>Create Account</Text>
                    </View>

                    <View style={{flex:1.5, padding:16}}>
                        <View style={{margin:8}}>
                            <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Name</Text>
                            <TextInput
                                onChangeText={(value)=>{
                                    this.setState({name:value})
                                }}
                                style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"Minty Nana Ekua"}/>
                        </View>

                        <View style={{margin:8}}>
                            <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Email</Text>
                            <TextInput
                                onChangeText={(value)=>{
                                    this.setState({email:value})
                                }}
                                style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin:8}}>
                            <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Password</Text>
                            <TextInput
                                onChangeText={(value)=>{
                                    this.setState({password:value})
                                }}
                                style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin:8}}>
                            <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Repeat password</Text>
                            <TextInput
                                onChangeText={(value)=>{
                                    this.setState({phone:value})
                                }}
                                style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin:4}}>
                            <Text style={{color:'black', fontWeight:'bold', marginLeft:4}}>Phone number</Text>
                            <TextInput placeholder={"+ 233 271 8989 33"}/>
                        </View>


                        <View style={{margin:8,height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{color:colors.primary, fontSize:18}}>Sign Up</Text>
                            <TouchableOpacity 
                                onPress={()=>{this.createNewUser()}}
                                style={{borderRadius:30,height:60, width:60, backgroundColor:colors.primarydark, justifyContent:'center', alignItems:'center'}}>
                                    <Icon name={"ios-arrow-round-forward"} color={"white"} size={24}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }

    createNewUser = () => {
        let {email, password} = this.state;
        firebase.auth().Auth.createUserWithEmailAndPassword(email, password).then().catch((error)=>{
            if(error.code === 'auth/weak-password'){
                alert("Weak password, make it stron enough");
            }
        })
    }

}

export {RegisterPage}