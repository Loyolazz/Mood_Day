import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NavProfile = createNativeStackNavigator()

const NavProf = () => {
    return (
        <NavProfile.Navigator initialRouteName=" " screenOptions={{ headerShown: false }}>
               
               <NavProfile.Screen name=' ' />
           
            <NavProfile.Group screenOptions={{ presentation: 'modal' }}>
                <NavProfile.Screen name=' '  />
            </NavProfile.Group>
        </NavProfile.Navigator>
    )
}
export default NavProf

//component={ } 
//component={ }