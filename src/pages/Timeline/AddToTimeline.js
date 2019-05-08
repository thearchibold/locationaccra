import React, {Component} from "react"
import RNFetchBlob from 'react-native-fetch-blob'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {colors,url} from "../../helpers/constants";
import {BackButton} from "../../components/BackButton";
import ImagePicker from "react-native-image-crop-picker"
import { backend } from "../../helpers/firebase";

class AddToTimeline extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contentSelected:false,
            images:[],
            video:{},
            type:"image",
            message:""
        }
    }


    render() {
        return (
            <View style={{flex:1}}>

                <View style={styles.header}>
                    <View style={styles.bck_container}>
                        <BackButton navigation={this.props.navigation}/>
                        <View style={styles.title_wrapper}>
                            <Text style={styles.title}>Post to timeline</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        if(this.state.contentSelected){
                            let {path, mime} = this.state.images[0];
                            const Blob = RNFetchBlob.polyfill.Blob
                            const fs = RNFetchBlob.fs
                            window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
                            window.Blob = Blob

                            let uploadBlob = null
                                                    
                            let dateString = Date.now(); 

                            let metadata = {
                                contentType: this.state.images[0].mime,
                              };
                              //root reference
                            let imageUploadRef = backend.storage().ref();
                            //storage reference
                            
                            let timelineImage = imageUploadRef.child("timeline").child(String(dateString.toString()+"."+String(mime.split("/")[1])))

                            let timelineRef = backend.database().ref().child(url.TIMELINE);
                           
                            fs.readFile(path, 'base64').then((data) => {
                                        return Blob.build(data, { type: `${mime};BASE64` })
                                    })
                                    .then((blob) => {
                                        uploadBlob = blob
                                        return timelineImage.put(blob, { contentType: mime })
                                      })
                                      .then(() => {
                                        uploadBlob.close()
                                        return timelineImage.getDownloadURL()
                                      })
                                      .then((url) => {
                                        // URL of the image uploaded on Firebase storage
                                        
                                        timelineRef.push({
                                                type:"image",
                                                url: url,
                                                date: dateString
                                            
                                        })
                                        this.props.navigation.goBack();                                      
                                      })
                                      .catch((error) => {
                                        //console.log(error);
                                
                                      })  
                         
                              
                        }else{
                            if(this.state.message.length>0){
                                timelinedata = {
                                    type:"text",
                                    text:this.state.message,
                                    date: Date.now()
                                }
                                backend.database().ref().child(url.TIMELINE).push(timelinedata);
                            }
                        }
                    }
                }
                    style={styles.post_btn}>
                        <Text style={{color:'white'}}>POST</Text>
                    </TouchableOpacity>
                </View>

                {
                    !this.state.contentSelected ?
                    <View style={styles.text_area}>
                            <TextInput
                                onChangeText={(value)=>{
                                    this.setState({message:value})
                                    //alert(this.state.message.length)
                                }}
                                multiline={true}
                                underlineAndroid={false}
                                placeholder={"Whats ganging up..."}
                                style={{fontSize: 24, padding:16,flexWrap:'wrap'}}
                            />
                     </View> :
                      <View style={{flex:1}}>
                        <TextInput placeholder={"Say something about this... "} underlineColorAndroid={"transparent"} style={{color:'gray', margin:8}}/>
                        <FlatList
                        style={{flex:1}}
                         data={this.state.images}
                         renderItem={({item, index})=>{
                             console.log("item : ",item.path)
                             return(
                                <Image style={{flex:1,margin:2, resizeMode:'contain',width:'100%' ,height:340}} source={{uri:item.path}}/>
                             )
                         }}
                        />
                  </View>
                }
                
               

                <View style={styles.footer}>
                    <Text>Add photos and more</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            this.addImage()
                        }}
                        style={styles.icon_btn}>
                            <Icon name={"ios-camera"} size={24} allowFontScaling={true} color={"orangered"} />
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>{
                            this.addVideo()
                        }}
                        style={styles.icon_btn}>
                            <Icon name={"ios-videocam"} size={24} allowFontScaling={true} color={colors.primarylight} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }


    addImage = () => {
        ImagePicker.openPicker({
            mediaType: "image",
            multiple: true
          }).then(images => {
            console.log(images);
            this.setState({contentSelected:true, images:images, type:'image'})
          }).catch(error=>{
              console.log(error)
          });
    }

    addVideo =() => {
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            console.log(video);
            this.setState({contentSelected:true, video:video, type:'video'})
          }).catch(error=>{
              console.log(error);
          });
    }

    postItem = () => {

    }


}

const styles = StyleSheet.create({
    header:{
        height:50,
        flexDirection:'row',
        alignItems:'center'
    },

    bck_container:{
      flex:1,
        flexDirection: 'row'
    },
    icon_btn:{
        height: 50,
        width:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_wrapper:{
        height:50,
        justifyContent:'center',
        alignItems:'center',


    },

    title:{
        color:colors.primarydark,
        fontSize:18,
        fontWeight: 'normal'
    },

    post_btn:{
        justifyContent:'center',
        alignItems:'center',
        height:30,
        paddingHorizontal:16,
        borderRadius:4,
        backgroundColor:colors.primary,
        margin:8,

    },
    text_area:{
        flex:1
    },
    footer:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:8,
        justifyContent:'space-between'

    }
})


export {AddToTimeline}