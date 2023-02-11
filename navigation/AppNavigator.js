
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';

import FontAwesome from '@expo/vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Home2" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>        
    )
}

const ClipStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Clip" component={ClipScreen} ></Stack.Screen>
        </Stack.Navigator>        
    )
}

const screenOption = ({route} ) => ({
    tabBarIcon: ( {color,size }) => {
        let iconName;
        if( route.name === 'Home' ){
            iconName = 'home';
        }
        else if( route.name === 'Clip'  ){
            iconName = 'bookmark';
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
    },
});

export default AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
        </Tab.Navigator>
    </NavigationContainer>
  );    
}

