

import React, {Component} from 'react';
import { Navigation } from "./src/pages/navigation";
import { MenuProvider } from 'react-native-popup-menu';


export default  class App extends Component{
  render(){
    console.disableYellowBox = true;
    return (
      <MenuProvider>
        <Navigation/>
      </MenuProvider>
    )
  }
}


