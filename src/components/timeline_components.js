import React from "react"
import {Image, Text, View} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import VideoPlayer from "./video";
import {Separator} from "./separator";
import {TimelineHeader} from "./timeline_component_header";


const TimelineVideo = (props) =>{
    return(
        <View>
            {/*header*/}
            <TimelineHeader/>

            {/*message body*/}
            <View style={{backgroundColor:'green'}}>
                <VideoPlayer/>
            </View>
            <Text style={{margin:6, fontStyle:'italic'}}>A small comment about the picture or image goes in here</Text>

            <Separator height={1}  marginHorizontal={4} color={"#f7f7f7"}/>

            <View style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 4,
                justifyContent: "space-around"
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{marginLeft: 8}}>20 interested</Text>
                </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>

            </View>
        </View>
    )
};





const TimelineText = (props) =>{
    return(
        <View>
            <TimelineHeader/>

            <Text style={{fontSize:18, color:'black', margin:6}}>Who is rocking this years afrochella. Mann that shid will be crazy</Text>


            <View style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 4,
                justifyContent: "space-around"
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{marginLeft: 8}}>20 interested</Text>
                </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>

            </View>
        </View>
    )
};



const TimelineImage = (props) => {
    return(
        <View>
            {/*header*/}
            <TimelineHeader/>

            {/*message body*/}
            <View style={{height:300, backgroundColor:'green', overflow: 'hidden'}}>
                <Image source={require("../assets/img/slider1.jpeg")} height={300} resizeMode={'cover'}/>

            </View>
            <Text style={{margin:6, fontStyle:'italic'}}>A small comment about the picture or image goes in here</Text>

            <Separator height={1}  marginHorizontal={4} color={"#f7f7f7"}/>

            <View style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 4,
                justifyContent: "space-around"
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <Icon name={"ios-heart"} color={"gainsboro"} size={24}/>
                    <Text style={{marginLeft: 8}}>20 interested</Text>
                </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={"md-chatboxes"} color={"gainsboro"} size={24}/>
                    <Text style={{margin:2}}>40 comments</Text>
                </View>

            </View>
        </View>
    )
};



export {TimelineVideo, TimelineText, TimelineImage}