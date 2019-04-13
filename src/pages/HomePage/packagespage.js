import React from "react";
import {View, Text, StatusBar, TouchableOpacity, StyleSheet} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome"
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
        let show ;
        switch (this.state.active) {
            case 'gold':
                show = <GoldPackage/>;
                break;

            case 'platinum':
                show = <Platinum/>;
                break;
            case 'diamond':
                show = <DiamondPackage/>;
                break;
            case 'vip':
                break;

            case 'extras':
                break;

            default:
                show = null
        }

        return(
            <LinearGradient colors={[colors.primarydark, colors.primary]} style={{flex:1}}>
                <StatusBar backgroundColor={colors.primarydark} barStyle="light-content" />
                <View style={{height:54, flexDirection:'row', alignItems:'center', paddingHorizontal:8}}>
                    <TouchableOpacity
                     onPress={()=>{
                         this.props.navigation.goBack();
                     }}>
                        <Icon allowFontScaling={true} size={24} name={"arrow-left"} color={"white"}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:20, color:'white', marginLeft:16}}>Packages</Text>
                </View>
                <View style={{height:34, flexDirection:'row', borderColor:'white',borderWidth:1,borderRadius:4,  marginHorizontal:8}}>

                    <TouchableOpacity
                        onPress={()=>{this.changeTab("gold")}}
                        style={this.state.active === "gold"? styles.tab_active:styles.tab_inactive}>
                        <Text style={this.state.active === "gold"? styles.text_active:styles.text_inactive}>GOLD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{this.changeTab("platinum")}}
                        style={this.state.active === "platinum"? styles.tab_active:styles.tab_inactive}>
                        <Text style={this.state.active === "platinum"? styles.text_active:styles.text_inactive}>PLATINUM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{this.changeTab("diamond")}}
                        style={this.state.active === "diamond"? styles.tab_active:styles.tab_inactive}>
                        <Text style={this.state.active === "diamond"? styles.text_active:styles.text_inactive}>DIAMOND</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{this.changeTab("vip")}}
                        style={this.state.active === "vip"? styles.tab_active:styles.tab_inactive}>
                        <Text style={this.state.active === "vip"? styles.text_active:styles.text_inactive}>V I P</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{this.changeTab("extras")}}
                        style={this.state.active === "extras"? styles.tab_active:styles.tab_inactive}>
                        <Text style={this.state.active === "extras"? styles.text_active:styles.text_inactive}>EXTRAS</Text>
                    </TouchableOpacity>

                </View>
                {
                    show
                }

            </LinearGradient>

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
    }
})
