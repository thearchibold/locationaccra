'use strict';

import React from "react";
import {View, StyleSheet, WebView} from "react-native"

const VRTour = require("./../virtual_tour/virtualtour.html");

export default class TourPage extends React.Component{


    constructor(props) {
        super(props);

    }


    render() {
        return (
        <WebView
            originWhitelist={['*']}
            source={{html:
                '<!DOCTYPE html>\n' +
                    '<html lang="en">\n' +
                    '<head>\n' +
                    '    <meta charset="UTF-8">\n' +
                    '    <title>Virtual Tour</title>\n' +
                    '    <script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>\n' +
                    '    <script src="https://unpkg.com/aframe-template-component@3.x.x/dist/aframe-template-component.min.js"></script>\n' +
                    '    <script src="https://unpkg.com/aframe-layout-component@3.x.x/dist/aframe-layout-component.min.js"></script>\n' +
                    '    <script src="https://unpkg.com/aframe-event-set-component@3.x.x/dist/aframe-event-set-component.min.js"></script>\n' +
                    '\n' +
                    '</head>\n' +
                    '<body>\n' +
                    ' <a-scene>\n' +
                    '     <a-assets>\n' +
                    '       <img src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" crossorigin id="panorama">\n' +
                    '     </a-assets>\n' +
                    '     <a-sky src="#panorama" rotation="0 -90 0"></a-sky>\n' +
                    ' </a-scene>\n' +
                    '</body>\n' +
                    '</html>'
            }}
        />

        );
    }

}

{/*<ViroScene>*/}
{/*<Viro360Image source={require('./../assets/img/360.jpeg')} />*/}
{/*<ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />*/}
{/*</ViroScene>*/}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 60,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});