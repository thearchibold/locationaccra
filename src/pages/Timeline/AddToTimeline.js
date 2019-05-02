import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import {colors} from "../../helpers/constants";
import {BackButton} from "../../components/BackButton";


class AddToTimeline extends Component{
    constructor(props) {
        super(props);

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
                    <TouchableOpacity style={styles.post_btn}>
                        <Text style={{color:'white'}}>POST</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text_area}>
                   <TextInput
                       multiline={true}
                       underlineAndroid={false}
                       placeholder={"Whats ganging up..."}
                       style={{fontSize: 24, padding:16,flexWrap:'wrap'}}
                   />
                </View>
                <View style={styles.footer}>
                    <Text>Add photos and more</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.icon_btn}>
                            <Icon name={"ios-camera"} size={24} allowFontScaling={true} color={"orangered"} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon_btn}>
                            <Icon name={"ios-videocam"} size={24} allowFontScaling={true} color={colors.primarylight} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon_btn}>
                            <Icon name={"ios-happy"} size={24} allowFontScaling={true} color={"gold"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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