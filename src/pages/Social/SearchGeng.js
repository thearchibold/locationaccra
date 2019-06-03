import React, { Component } from 'react';
import {  View, Text, TextInput, TouchableOpacity} from 'react-native';
import  Icon from "react-native-vector-icons/Ionicons"
import { colors } from '../../helpers/constants';
import { Separator } from '../../components/packages';

class SearchGengs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{backgroundColor: 'white',flex:1}}>
        <View style={{flexDirection: 'row',}}>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.goBack()}}
            style={{ width: 40, alignItems: 'center', justifyContent: 'center', }}>
            <Icon name={"ios-arrow-back"} size={24} color={colors.primarydark}/>
          </TouchableOpacity>
          <TextInput
          autoFocus={true}
                        keyboardAppearance={"dark"}
                        style={{padding:12, fontSize:16}}
                        placeholder="Search gengs" underlineColorAndroid="transparent" />
        </View>

        <Separator height={1}/>
                    
      </View>
    );
  }
}

export default SearchGengs;
