import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mood from "../../screens/mood/mood";
import ModalScreen from "../../screens/moodSelection/modalScreen";

const NavMoody = createNativeStackNavigator()

const NavMoods = () => {
    return (
        <NavMoody.Navigator initialRouteName="Mood" screenOptions={{ headerShown: false }}>
            
                <NavMoody.Screen name='Mood' component={Mood} />
            
            <NavMoody.Group screenOptions={{ presentation: 'modal' }}>
                <NavMoody.Screen name='ModalScreen' component={ModalScreen} />
            </NavMoody.Group>
        </NavMoody.Navigator>
    )
}
export default NavMoods

