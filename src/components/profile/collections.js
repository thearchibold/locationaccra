import React ,{Componet} from "react"
import {View, Text, Image, FlatList} from "react-native"


const data = [1,2,3,4,5,6,7,8,9,10,11,12];


const Collections = (props) =>{
    return(
        <FlatList
            renderItem={({item, index})=>{
                return(
                    <Image style={{height:200, flex:1, resizeMode:"cover", margin:2,}} source={require("../../assets/img/slider2.jpeg")}/>
                )
            }}
            data={data}
            initialNumToRender={10}
            keyExtractor={(iten, index)=>{return String(index)}}
            numColumns={2}
            disableVirtualization={true}
            maxToRenderPerBatch={6}
        />
    )
};




export {Collections}