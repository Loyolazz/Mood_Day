import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../screens/login/login'
import TabBottomRoutes from "../nav/tabs";
import MoodScreens from "../../screens/moodSelection/moodSelection";


const { Navigator, Screen } = createNativeStackNavigator()

const Stack = () => {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name='Login' component={Login} />
            <Screen name='Tab' component={TabBottomRoutes} />
            <Screen name='MoodScreens' component={MoodScreens}
            options={{ presentation: 'modal', animation: 'slide_from_bottom'}}/>
        </Navigator>
    )
}
export default Stack

