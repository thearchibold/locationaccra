import React from "react";
import {View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView} from "react-native"

import Icon from "react-native-vector-icons/Ionicons"
import {colors} from "../../helpers/constants";
import {DiamondPackage, GoldPackage, Platinum} from "../../components/packages/index";

export default class PackagesPage extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            active:"gold"
        };
        this.changeTab = this.changeTab.bind(this)
    }

    render(){



        return(
            <View style={{flex:1, backgroundColor:colors.main_page_bg}}>
                {/*header*/}
                <View style={{height:50, backgroundColor:colors.primary, flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.goBack();
                        }}
                        style={{height:50, width:50, justifyContent:'center', alignItems:'center'}}>
                       <Icon name={"ios-arrow-back"} size={24} color={"white"}/>
                    </TouchableOpacity>
                    <Text style={{letterSpacing: 1.5, fontSize:18, color:"white"}}>Packages</Text>

                    <TouchableOpacity/>
                </View>

                <ScrollView style={{flex:1}}>
                    <View style={{height:220, flexDirection:'row', }}>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'gold'}}>GOLD</Text>
                            <View style={{flex:1}}>

                            </View>

                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>

                        </View>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'silver'}}>PLATINUM</Text>
                            <View style={{flex:1}}>

                            </View>
                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{height:220, flexDirection:'row', }}>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'#1a1a1a'}}>DIAMOND</Text>
                            <View style={{flex:1}}>

                            </View>

                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>
                        </View>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'silver'}}>EXTRA</Text>
                            <View style={{flex:1}}>

                            </View>

                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{height:220, flexDirection:'row', }}>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'black'}}>BLACK</Text>
                            <View style={{flex:1}}>

                            </View>

                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>

                        </View>

                        <View  style={styles.package}>
                            <Text style={{...styles.package_title, color:'silver'}}>PLATINUM</Text>
                            <View style={{flex:1}}>

                            </View>

                            <TouchableOpacity style={styles.view_btn}>
                                <Icon name={"ios-eye"} color={colors.primarylight} size={20} allowFontScaling={true}/>
                                <Text style={styles.view_text} >View details</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </ScrollView>
            </View>

        )

    }

    changeTab = (tab) =>{
        this.setState({active:tab})
    }
}

const styles = StyleSheet.create({
    tab_active:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems: 'center',
        padding:2
    },
    text_active:{
        color:colors.primary,
        fontSize:12
    },
    tab_inactive:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:2
    },
    text_inactive:{
        color:"#dedede",
        fontSize:10
    },
    package:{
        flex:1,
        margin:2,
        borderRadius:4,
        borderWidth:1,
        borderColor:'gainsboro',
        backgroundColor:'white'
    },
    package_title:{
        letterSpacing: 1,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        margin:4
    },
    view_btn:{
        height:30,
        margin:8,
        flexDirection:'row',
        borderRadius:0,
        borderColor:colors.primarylight,
        color:colors.primarylight,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1
    },
    view_text:{
        color:colors.primarylight,
        marginLeft:4
    }
});
