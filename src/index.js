import {createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation"

import Homepage from "./pages/homepage"
import PageTwo from "./pages/pagetwo"
import PackagesPage from "./pages/packagespage"

const MainApp = createAppContainer(createStackNavigator({
    pageone:{
        screen:Homepage,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    packages:{
        screen:PackagesPage,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    pagetwo:PageTwo,

},{
    initialRouteName:"pageone"
}));

export {MainApp}