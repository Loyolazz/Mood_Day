import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "../../screens/proflieEdit/profileEdit";
import Profile from "../../screens/profile/profile";

const PerMov = createNativeStackNavigator()

const PerfilMov = () => {
    return (
        <PerMov.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <PerMov.Screen name='Profile' component={Profile} />
                <PerMov.Screen name='EditProfile' component={EditProfile} />
        </PerMov.Navigator>
    )
}
export default PerfilMov