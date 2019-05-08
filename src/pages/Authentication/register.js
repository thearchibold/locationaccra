import React, {Component} from "react"
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, ToastAndroid} from "react-native"
import Transition from "react-navigation-fluid-transitions/TransitionView";
import Icon from "react-native-vector-icons/Ionicons"
import {colors, url} from "../../helpers/constants";
import { backend } from "../../helpers/firebase";

const {height} = Dimensions.get("window");

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
           data:{
               name:"",
               email:"",
               password:"",
               phone:""
           },
            loading:false
        }


    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor:'white'}}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                    style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
                    <Icon name={"ios-arrow-back"} size={24} color={colors.primarydark}/>
                
                </TouchableOpacity>
                <ScrollView style={{height: height, backgroundColor: 'white'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                        
                        <Text style={{fontSize: 22, fontWeight: '500'}} allowFontScaling={true}>Create Account</Text>
                    </View>

                    <View style={{flex: 1.5, padding: 16}}>
                        <View style={{margin: 8}}>
                            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 4, fontSize: 16}}>Name</Text>
                            <TextInput
                                onChangeText={(value) => {
                                    this.setState({data: {...this.state.data, name: value}})
                                }}
                                style={{borderBottomColor: "gainsboro", borderBottomWidth: 1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"Minty Nana Ekua"}/>
                        </View>

                        <View style={{margin: 8}}>
                            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 4, fontSize: 16}}>Email</Text>
                            <TextInput
                                onChangeText={(value) => {
                                    this.setState({data: {...this.state.data, email: value}})
                                }}
                                style={{borderBottomColor: "gainsboro", borderBottomWidth: 1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin: 8}}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                marginLeft: 4,
                                fontSize: 16
                            }}>Password</Text>
                            <TextInput
                                onChangeText={(value) => {
                                    this.setState({data: {...this.state.data, password: value}})
                                }}
                                style={{borderBottomColor: "gainsboro", borderBottomWidth: 1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin: 8}}>
                            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 4, fontSize: 16}}>Repeat
                                password</Text>
                            <TextInput
                                onChangeText={(value) => {
                                    this.setState({data: {...this.state.data, password: value}})
                                }}
                                style={{borderBottomColor: "gainsboro", borderBottomWidth: 1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"mintynana@gmail.com"}/>
                        </View>


                        <View style={{margin: 4}}>
                            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 4}}>Phone number</Text>
                            <TextInput
                                onChangeText={(value) => {
                                    this.setState({data: {...this.state.data, phone: value}})
                                }}
                                style={{borderBottomColor: "gainsboro", borderBottomWidth: 1}}
                                underlineAndroid={colors.primarydark}
                                placeholder={"+ 233 271 8989 33"}/>
                        </View>


                        <View style={{
                            margin: 8,
                            height: 70,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{color: colors.primary, fontSize: 18}}>Sign Up</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({loading:true});
                                    this.createNewUser()
                                }}
                                style={{
                                    borderRadius: 30,
                                    height: 60,
                                    width: 60,
                                    backgroundColor: colors.primarydark,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                {
                                    !this.state.loading ? <Icon name={"ios-arrow-round-forward"} color={"white"} size={24}/>:
                                        <ActivityIndicator color={"white"}/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }

    createNewUser = () => {
        let {email,password, name, phone} = this.state.data;
        backend.auth().createUserWithEmailAndPassword(email, password).then(data=>{
            console.log(data);
            ToastAndroid.show("Creating new user",1000);
            backend.database().ref().child(url.USERS).child(data.user.uid).child(url.PROFILE).push({name, phone})
            this.setState({loading:false});
            this.props.screenProps.navigate("home");
        }).catch(error=>{
            alert(JSON.stringify(error))
        });
    }

}

export {RegisterPage}