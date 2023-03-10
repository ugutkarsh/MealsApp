import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesMealsScreen from '../screen/FavoritesMealsScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FiltersScreen from '../screen/FiltersScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen

        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesMealsScreen}
        options={{        
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Filter"
        component={FiltersScreen}
        options={{          
          tabBarLabel: 'FiltersScreen',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bell" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();

 
export default (MyTabs);