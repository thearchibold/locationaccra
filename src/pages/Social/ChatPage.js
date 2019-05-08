import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <View style={styles.navbar }>
                    <View style={[styles.title, { opacity: navbarOpacity }]}>
                        {/*<Image height={40} width={null} resizeMode={'cover'} source={require('../assets/img/logo.png')}/>*/}
                        <Text style={{color:"white",textAlignVertical:'center', fontSize:18, letterSpacing: 1.5}}>GENGS</Text>
                    </View>
                </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginBottom:2,
    backgroundColor: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,
    justifyContent:"center",

    paddingLeft:8,
    paddingRight:8,
    shadowOffset: {
        width: 0,
        height: 1,
    }
}
}
)