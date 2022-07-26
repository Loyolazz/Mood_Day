import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import StackModal from "../stackList/stackList";
import Profile from "../../screens/profile/profile";
import NavMoods from "../navMoods/navMoods";


const Tab = createBottomTabNavigator();

const TabBottomRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName="Moods"
            screenOptions={{
                headerShown: false, tabBarShowLabel: false, tabBarInactiveTintColor: 'rgba(48, 79, 254, 0.1)',
                tabBarActiveTintColor: '#304FFE', tabBarStyle: { height: 70 }
            }} >
                <Tab.Screen name="HomeScreen" component={StackModal}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={
                                {
                                    borderWidth: 1, paddingHorizontal: 10,
                                    paddingVertical: 5, borderRadius: 8, backgroundColor: color, borderColor: color,
                                }
                            }>
                                <Icon name="home" color={color === '#304FFE' ? 'white' : '#304FFE'} size={20} />
                            </View>
                        ),
                    }} />

                <Tab.Screen name="Moods" component={NavMoods}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={
                                {
                                    borderWidth: 1, paddingHorizontal: 5,
                                    paddingVertical: 5, borderRadius: 80, backgroundColor: '#304FFE', borderColor: color,
                                }
                            }>
                                <Icon name="add" color={'white'} size={40} />
                            </View>
                        ),
                    }} 
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                          e.preventDefault()
                          navigation.navigate('MoodScreens')
                        },
                      })}
                    />

                <Tab.Screen name="Infos" component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={
                                {
                                    borderWidth: 1, paddingHorizontal: 10,
                                    paddingVertical: 5, borderRadius: 8, backgroundColor: color, borderColor: color,
                                }
                            }>
                                <Icon name="list" color={color === '#304FFE' ? 'white' : '#304FFE'} size={20} />
                            </View>
                        ),
                    }} />

        </Tab.Navigator>

    )
}

export default TabBottomRoutes

