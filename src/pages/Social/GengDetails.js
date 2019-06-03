import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Separator } from '../../components/packages';
import { colors } from '../../helpers/constants';

class GengDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{height:300, backgroundColor: 'red',}}>

        </View>
        
        <Separator height={30} />

        <View style={{padding:16, borderTopColor: 'gainsboro',borderTopWidth: 1,}}>
          <Text style={{ fontWeight: 'normal', color: colors.primarydark, fontSize: 16 }}>Group description</Text>
          <Text>This is a small description about the group</Text>
        </View>

        <Separator height={30} />

        <View style={{padding:16, borderTopColor: 'gainsboro',borderTopWidth: 1,}}>
          <Text style={{ fontWeight: 'normal', color: colors.primarydark, fontSize: 16 }}>Group members</Text>
          <Text>This is a small description about the group</Text>
        </View>
      </View>
    );
  }
}

export default GengDetails;
