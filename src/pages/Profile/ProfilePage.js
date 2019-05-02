import React, {Component} from "react";
import {Dimensions, StatusBar, View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import {colors} from "../../helpers/constants";
import {Collections} from "../../components/profile/collections";


const profilebar = 50;
class ProfilePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            gradient_height:0,
            active_tab:'post',
        };

        this.changeTab = this.changeTab.bind(this)
    }


    componentWillMount(){
       const {height} = Dimensions.get("window");
       this.setState({gradient_height:Math.ceil(height/3)})

    }

    changeTab = (tab) =>{
       this.setState({active_tab:tab})
    };


    render() {
        console.log(this.props);

        return (
            <View style={{flex:1}}>
                {/*<LinearGradient*/}
                {/*style={{height:this.state.gradient_height}}*/}
                {/*start={{x: 0, y: 0}} end={{x: 0, y: 1}}*/}
                {/*colors={[colors.primarydark , colors.primary, colors.primary, colors.primarylight]}>*/}
                {/*<View style={{height:'100%',flex:1, justifyContent:'center', alignItems:'center'}}>*/}
                {/*<View style={{height:80, width:80, borderWidth:2, borderColor:'white', borderRadius:40}}>*/}

                {/*</View>*/}
                {/*</View>*/}
                {/*</LinearGradient>*/}
                {/*<View style={{height:60, }}>*/}

                {/*</View>*/}
                <StatusBar/>




                <View style={{flex:1, backgroundColor:'white', marginTop:profilebar}}>
                    <View style={{height:100, width:'60%', backgroundColor:'white', alignSelf:"center",}}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                           <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                               <Text style={{fontWeight: 'bold', color:'black', fontSize:14}}>12k+</Text>
                               <Text style={{fontSize: 12}}>posts</Text>
                           </View>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight: 'bold', color:'black', fontSize:14}}>12k+</Text>
                                <Text style={{fontSize: 12}}>gengs</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight: 'bold', color:'black', fontSize:14}}>12k+</Text>
                                <Text style={{fontSize: 12}}>collections</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{height:30,width:'100%',     borderWidth: 1, borderRadius: 2, borderColor: 'gainsboro', justifyContent:'center', alignItems: 'center'}}>
                            <Text>Edit profile</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{height:1000, justifyContent:'center', marginTop:16}}
                      >
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <View style={{height:30, width:'80%', flexDirection:'row', borderRadius:20, backgroundColor:'#f3f3f3'}}>

                                <TouchableOpacity
                                    onPress={()=>{this.changeTab("post")}}
                                    style={this.state.active_tab === 'post' ? styles.tab_active : styles.default_tab}>
                                    <Text style={this.state.active_tab === 'post' ? styles.active_tab_text : styles.default_text}>Posts</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>{this.changeTab("collection")}}
                                    style={this.state.active_tab === 'collection' ? styles.tab_active : styles.default_tab}>
                                    <Text style={this.state.active_tab === 'collection' ? styles.active_tab_text : styles.default_text}>Collections</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flex:1, padding:8}}>
                            <Collections/>
                        </View>
                    </View>
                </View>


                <View style={styles.appbar}>
                    {/*profile image*/}
                    <View style={styles.profileimage}>

                    </View>
                    <Text style={styles.profiletext}>Archibold Bernard</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    appbar:{
        height:profilebar,
        backgroundColor:colors.primarydark,
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        top:0,
        width:'100%'
    },
    profileimage:{
        height: 60,
        width:60,
        borderWidth:2,
        borderColor:'white',
        borderRadius:30,
        marginLeft:16,
        marginBottom: -60,
        backgroundColor: 'red'
    },
    profiletext:{
        color:'white',
        marginLeft:8,
        fontSize:18
    },
    tab_active:{
        backgroundColor:colors.primarydark,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        borderRadius:20
    },
    active_tab_text:{
        color:'white',
    },
    default_tab:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    default_text:{
        color:'gray'
    }
});


export {ProfilePage}