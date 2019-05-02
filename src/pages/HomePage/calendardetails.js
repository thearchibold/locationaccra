import React from "react"
import {View, Image, TouchableOpacity, Text, ScrollView} from "react-native"
import {Transition} from "react-navigation-fluid-transitions"
import {colors} from "../../helpers/constants";
import Icon from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"



export default  class CalendarDetails extends React.Component{
    constructor(props) {
        super(props);
        let {image, id} = this.props.navigation.state.params;
        this.state = {
            id:id,
            image:image
        }
    }

    render(){

        return(
            <View style={{flex:1, backgroundColor:colors.primarydark, position:'relative'}}>
                <View style={{height:260, position:'absolute', top:0, left:0,right:0, bottom:0}}>
                    <Transition shared={this.props.navigation.state.params.id}>
                    </Transition>
                   
                </View>

                <ScrollView style={{marginTop:260, flex:1,}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:8, alignItems:'center'}}>
                    <Transition  appear={"left"} disappear={"right"} >
                        <View>
                            <Text allowFontScaling={true} style={{fontSize:28,color:"#dedede", }}>LiveWyred</Text>
                            <Text allowFontScaling={true} style={{fontSize:16, color:"gainsboro", marginTop:4}}>24th December, 2019</Text>
                        </View>
                    </Transition>
                        <TouchableOpacity
                            onPress={()=>{this.props.navigation.navigate('tour')}}
                            style={{ padding:8, backgroundColor:'white', borderRadius:40, justifyContent:'center', alignItems:'center'}}>
                            <Image source={require('../../assets/img/virtual-reality.png')} height={10} width={20}/>
                            {/*<Text style={{color:colors.primarydark, fontSize:10, fontWeight: 'bold'}}>Take a tour</Text>*/}
                            {/*<Icon name={"sunglasses"} color={colors.primarydark} size={24}/>*/}

                        </TouchableOpacity>
                    </View>
                    <View style={{ margin:8}}>
                        <View style={{height:2, width:100, backgroundColor:colors.primary, marginVertical:16}}/>
                        <Text style={{color:"white"}}>
                            It is Christmas Eve and you’re in Ghana. You’ll stop by one of our Hotel
                            Partners (JobyCo) to pick up all tickets, bands, general information and updates to your
                            itinerary. Make sure you get some rest after, because at night, LiveWyred is premiering their
                            biggest December concert and party to usher in the festivities. P.S keep an eye out for
                            fireworks.
                            {"\n"}
                            {"\n"}
                            On Christmas day, Location Accra welcomes you to the biggest and most
                            luxurious Christmas pool party in Africa! P.S keep an eye out for chocolate girls in bikinis.
                            “There are a lot of ideas and resources being poured into this, we are going to make it fun, sexy
                            and plush. The goal is to trend on twitter” - Kofi Anim Danso, CEO Location Accra, Organizers
                            of 1925.
                        </Text>
                    </View>


                </ScrollView>

                <View style={{
                    position:'absolute',
                    top:0, left:0, right:0,bottom:0,
                    justifyContent:'center',
                    height:54,
                    padding:8
                }}>
                    <Transition appear={"left"} disappear={"right"} >
                        <TouchableOpacity style={{height:50, width:50, borderRadius:25,backgroundColor:colors.primary, justifyContent:'center', alignItems:'center' }}
                                          onPress={()=>{
                                              this.props.navigation.goBack();
                                          }}>
                            <Icon allowFontScaling={true} size={20} name={"arrow-left"} color={"white"}/>

                        </TouchableOpacity>
                    </Transition>
                </View>

            </View>
        )

    }
}