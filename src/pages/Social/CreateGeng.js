import React, {Component} from "react"
import {View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator} from "react-native"
import {colors} from "../../helpers/constants";
import {BackButton} from "../../components/BackButton";
import Icon from "react-native-vector-icons/Ionicons"
import { backend } from "../../helpers/firebase";



class CreateGeng extends Component {
    constructor(props){
        super(props);
        console.log("create geng", this.props);
        this.state = {
            name: "",
            desc: "",
            image: "",
            hasPickedImage: false,
            loading:false
        }
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <BackButton navigation={this.props.navigation}/>

                <ScrollView style={{flex:1, backgroundColor:'white', padding:8}}>

                <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:16}}>
                    <View style={{height:200, width:200, borderRadius:100,margin:16, backgroundColor:'whitesmoke', justifyContent:'center', alignItems:'center'}}>
                        <Icon name={"ios-camera"} color={"white"} size={100}/>
                    </View>
                    <Text style={{color:colors.primarydark}}>Choose Geng profile image</Text>
                </View>
                 {/*<View style={{height:0.5, backgroundColor:colors.primary}}/>*/}

                <View style={{flex:1,padding:16, justifyContent:'center'}}>
                    <View style={{margin:8}}>
                        <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Group name</Text>
                        <TextInput
                            keyboardType={"default"}
                            onChangeText={(value)=>{
                                this.setState({name:value})
                            }}
                            style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                            underlineAndroid={colors.primarydark}
                            placeholder={"Mighty Geng"}/>
                    </View>

                    <View style={{margin:8}}>
                        <Text style={{color:'black', fontWeight:'bold', marginLeft:4, fontSize:16}}>Group description</Text>
                        <TextInput
                            keyboardType={"default"}
                            onChangeText={(value)=>{
                                this.setState({desc:value})
                            }}
                            style={{borderBottomColor:"gainsboro", borderBottomWidth:1}}
                            underlineAndroid={colors.primarydark}
                            placeholder={"This group is fire, its just something else"}/>
                    </View>

                </View>

                    <View style={{height:100, justifyContent:'center', padding:16}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.createGeng()
                            }}
                            style={{ height: 40, borderRadius: 30, borderWidth: 1, borderColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                            {
                                this.state.loading ? <ActivityIndicator size="small" color={colors.primarydark}/> :
                                <Text style={{color:colors.primary}}>Create Geng</Text>
                            }
                        </TouchableOpacity>
                    </View>
            </ScrollView>
            </View>
        )
    }

    createGeng = () => {
        let { name, desc, hasPickedImage } = this.state;
        //path to geng
        let path = backend.database().ref().child("gengs");
        if (!hasPickedImage) {
            if (name !== "") {
                this.setState({ loading: true })
                path.push({ name, desc, image: "" }).then(data => {
                    console.log(data);
                    this.setState({ loading: false });
                    this.props.navigation.goBack();
                })
                

            }
        }
    }
}

export {CreateGeng}