import React, {Component} from "react"
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, ToastAndroid, AsyncStorage} from "react-native"
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
            password:"",
            login:false
        };

        console.log(this.props);
    }
     
    

    render(){
        return(
    
            <ScrollView

                contentContainerStyle={{height,justifyContent:'center', backgroundColor:'white'}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    
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
                            value={this.state.password}
                            keyboardType={"visible-password"}
                            secureTextEntry
                            style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                            placeholder={"*********"}/>
                    </View>

                    <View style={{margin:8,height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{color:colors.primary, fontSize:14}}>Sign In</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.screenProps.navigate("home");
                                //this.setState({login:true});
                                //this.login()
                            }}
                            style={{borderRadius:30,height:60, width:60, backgroundColor:colors.primarydark, justifyContent:'center', alignItems:'center'}}>
                            {
                                !this.state.login ? <Icon name={"ios-arrow-round-forward"} color={"white"} size={24}/> :
                                    <ActivityIndicator color={"white"}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate("register")}}
                        style={{height:40,margin:8, borderWidth:1, borderColor:colors.primarydark,borderRadius:20,justifyContent:'center', alignItems:'center'}}
                        >
                        <Text
                            
                            style={{
                                fontWeight:'bold', color:colors.primarydark, fontSize:16,margin:8
                            }}>Sign Up</Text>

                        </TouchableOpacity>
                
                </View>

                
                
            </ScrollView>
           
        )
    }

    login = () => {
        
        let {email, password} = this.state;
        backend.auth().setPersistence(backend.auth.Auth.Persistence.LOCAL)
            .then(() => {
                backend.auth().signInWithEmailAndPassword(String(email),String(password)).then(data=>{
                    ToastAndroid.show("signing in", 1000);
                    console.log(data.user.uid)
                    this.props.screenProps.navigate("home");
                    this._storeData(data.user.uid)
                    this.setState({login:false})
                   //
                }).catch(error=>{
                    console.log(error);
                    this.setState({login:false})
                });

            })
            .catch(function(error) {
                this.setState({login:false})
            });

    }


    _storeData = async (key) => {
        try {
          await AsyncStorage.setItem('user', String(key));
        } catch (error) {
          
        }
      };

}

export {LoginPage}