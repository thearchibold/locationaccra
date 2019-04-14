import React, {Component} from "react"
import {Image, View} from "react-native"
import {Platform, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {colors} from "../helpers/constants";
import VideoPlayer from "./video";
import {Separator} from "./separator";


const TimelineVideo = (props) =>{
    return(
        <View>
            {/*header*/}
            <View style={{flexDirection: 'row', alignItems:'center', height:50,flex:1, paddingHorizontal:4}}>
                <View style={{height:40, width: 40, borderRadius:20, backgroundColor: 'red', margin:4}}>

                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{fontWeight: 'bold', color:'#000', fontSize:14}}>Archibold Bernard</Text>
                    <Text style={{ color:'#3b3b3b', fontSize:10}}>Tuesday, 12 June 2017  10:30am</Text>
                </View>
                <View style={{height:50, width:30, justifyContent:'center', alignItems:'center'}}>
                    <Icon name={Platform.OS === "android" ? "md-more" : "ios-more"} size={24} color={colors.primary}/>
                </View>
            </View>

            {/*message body*/}
            <View style={{backgroundColor:'green'}}>
                <VideoPlayer/>
            </View>
            <Text style={{margin:6, fontStyle:'italic'}}>A small comment about the picture or image goes in here</Text>

            <Separator height={1}  marginHorizontal={4} color={"#f7f7f7"}/>

            <View style={{height:50, flexDirection:'row', alignItems:'center', padding:4}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>20 interested</Text>
                </View>

                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                </View>
            </View>
        </View>
    )
};





const TimelineText = (props) =>{
    return(
        <View>
            <View style={{flexDirection: 'row', alignItems:'center', height:50,flex:1, paddingHorizontal:4}}>
                <View style={{height:40, width: 40, borderRadius:20, backgroundColor: 'orangered', margin:4}}>

                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{fontWeight: 'bold', color:'#000', fontSize:14}}>Minty Nana Ekua</Text>
                    <Text style={{ color:'#3b3b3b', fontSize:10}}>Tuesday, 12 June 2017  10:30am</Text>
                </View>
                <View style={{height:50, width:30, justifyContent:'center', alignItems:'center'}}>
                    <Icon name={Platform.OS === "android" ? "md-more" : "ios-more"} size={24} color={colors.primary}/>
                </View>
            </View>

            <Text style={{fontSize:18, color:'black', margin:6}}>Who is rocking this years afrochella. Mann that shid will be crazy</Text>


            <View style={{height:50, flexDirection:'row', alignItems:'center', padding:4}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>20 interested</Text>
                </View>

                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                </View>
            </View>
        </View>
    )
};



const TimelineImage = (props) => {
    return(
        <View>
            {/*header*/}
            <View style={{flexDirection: 'row', alignItems:'center', height:50,flex:1, paddingHorizontal:4}}>
                <View style={{height:40, width: 40, borderRadius:20, backgroundColor: 'gray', margin:4}}>

                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{fontWeight: 'bold', color:'#000', fontSize:14}}>Archibold Bernard</Text>
                    <Text style={{ color:'#3b3b3b', fontSize:10}}>Tuesday, 12 June 2017  10:30am</Text>
                </View>
                <View style={{height:50, width:30, justifyContent:'center', alignItems:'center'}}>
                    <Icon name={Platform.OS === "android" ? "md-more" : "ios-more"} size={24} color={colors.primary}/>
                </View>
            </View>

            {/*message body*/}
            <View style={{height:300, backgroundColor:'green', overflow: 'hidden'}}>
                <Image source={require("../assets/img/slider1.jpeg")} height={300} resizeMode={'cover'}/>

            </View>
            <Text style={{margin:6, fontStyle:'italic'}}>A small comment about the picture or image goes in here</Text>

            <Separator height={1}  marginHorizontal={4} color={"#f7f7f7"}/>

            <View style={{height:50, flexDirection:'row', alignItems:'center', padding:4}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>20 interested</Text>
                </View>

                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>
                <View style={{flexDirection:'row', flex:1}}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                </View>
            </View>
        </View>
    )
};



export {TimelineVideo, TimelineText, TimelineImage}