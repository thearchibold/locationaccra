

import React, {Component} from 'react';
import {Navigation} from "./src/pages/navigation";


export default  class App extends Component{
  render(){
    console.disableYellowBox = true;
    return(
        <Navigation/>
    )
  }
}


