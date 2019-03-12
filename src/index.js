import {createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation"

import Homepage from "./pages/homepage"
import PageTwo from "./pages/pagetwo"


const MainApp = createAppContainer(createSwitchNavigator({
    pageone:Homepage,
    pagetwo:PageTwo
},{
    initialRouteName:"pageone"
}));


export {MainApp}