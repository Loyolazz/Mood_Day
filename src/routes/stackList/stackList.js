import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home/home";
import MoreDetails from "../../screens/cardDetails/MoreDetails";
import ModalScreen from "../../screens/moodSelection/modalScreen";

const ModalStack = createNativeStackNavigator()

const StackModal = () => {
    return (
        <ModalStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <ModalStack.Screen name='Home' component={Home} />
                <ModalStack.Screen name='MoreDetails' component={MoreDetails} />
        </ModalStack.Navigator>
    )
}
export default StackModal