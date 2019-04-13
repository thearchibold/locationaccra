import React from "react"
import {View} from "react-native"
import {colors} from "../../helpers/constants";

export default class MoodBoard extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
           <View style={{flex:1, backgroundColor:colors.primarylight}}/>
        );
    }


}