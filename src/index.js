import {createAppContainer} from "react-navigation"
import {createFluidNavigator} from "react-navigation-fluid-transitions"

import Homepage from "./pages/homepage"
import PageTwo from "./pages/pagetwo"
import PackagesPage from "./pages/packagespage"
import CalendarDetails from "./pages/calendardetails"
import TourPage from "./components/virtual_tour/vrtour"
import  MoodBoard from './pages/moodboard'

const MainApp = createAppContainer(createFluidNavigator({
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

    calendardetails:{
        screen:CalendarDetails,
        navigationOptions: ({navigation})=>({
            header:null
        })
    },
    tour:{
       screen:TourPage
    },
    moodboard:{
        screen:MoodBoard,
        navigationOptions:({navigation})=>({
            title:"MoodBoard"
        })
    }

},{
    initialRouteName:"pageone",
    navigationOptions: { gesturesEnabled: true }
}));

export {MainApp}