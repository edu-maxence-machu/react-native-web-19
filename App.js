/* Import de React */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Button, Alert, Text, View } from 'react-native';
/* Modules de ReactNavigation */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Pages */ 
import Demo from './pages/Demo';
import Cours from './pages/Cours';
import Account from './pages/Account';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Cours" component={Cours} />
                <Tab.Screen name="Demo" component={Demo} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
