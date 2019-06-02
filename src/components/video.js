import React from "react";
import {View, StyleSheet } from "react-native"
import Video from "react-native-af-video-player"


export default class VideoPlayer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            play :false
        }
    }

   
    render(){
       
        
        return(
            <View style={styles.container}>
               
                    <Video
                        ref={(ref) => { this.video = ref }}
                        title={"Party on bus"}
                        url={require('./../assets/video/video1.mp4')} />
               
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});