import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {TabNavigator, createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator, StackNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
// import all class(Component)
import Exercise from './source/src/Exercise.js'

import Vitamin from './source/src/Vitamin.js'

import Schedule from './source/src/Schedule.js'

import Chest from './source/layout_muscles/Chest.js';


const MyTab = createMaterialTopTabNavigator({
  Excersie: {
    screen: Exercise
  },

  Vitamin: {
    screen: Vitamin
  },

  Schedule: {
    screen: Schedule
  }
}, {

  tabBarPosition: 'top',
  swipeEnable: true,
  animatedEnable: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'tomato',
    inactiveTintColor: 'black',
    style: {
      backgroundColor: '#F0E68C'
    },
    pressColor: 'gray'
  }
});


const MyStack = StackNavigator({

  Excersie: {
    screen: MyTab
  },
  Chest: {
    screen: Chest
  }
},
{

  navigationOptions:{
  header: null,
  title: 'Home',
  headerVisible: true,
  }
}

);



export default MyStack;

// export default createMaterialTopTabNavigator({
//   Excersie: {
//     screen: Exercise,
//     navigationOptions: {
//       title: 'Exercise',
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: "#fff",
//         fontSize: 12,
//       },
//       tabBarIcon: ({focused, tintColor}) => (<Ionicons name={'ios-book'} size={20} color={tintColor}/>)
//     }
//   },
//   Vitamin: {
//     screen: Vitamin,
//     navigationOptions: {
//       title: 'Vitamin',
//       tabBarIcon: ({focused, tintColor}) => (<Ionicons name={'ios-medkit'} size={20} color={tintColor}/>)
//     }
//
//   },
//   Schedule: {
//     screen: Schedule,
//     navigationOptions: {
//       title: 'Schedule',
//       tabBarIcon: ({focused, tintColor}) => (<Ionicons name={'ios-time'} size={20} color={tintColor}/>)
//     }
//
//   }
// },
// {
//
//   navigationOptions : {
//
//     headerStyle: {
//       backgroundColor: 'rgb(85, 163, 223)',
//     },
//     headerTintColor: 'rgb(255,255,255)',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       fontSize: 12,
//     },
//   },
//   tabBarPosition: 'top',
//   swipeEnable: true,
//   animatedEnable: true,
//   tabBarOptions: {
//
//     showIcon: true,
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'black',
//     style: {
//       backgroundColor: '#F0E68C'
//     },
//     pressColor: 'gray'
//   }
// });

// let MainScreenNavigator = createMaterialTopTabNavigator(
//   {
//   Excersie :{screen: Exercise},
//   Vitamin :{screen: Vitamin},
//   Schedule :{screen: Schedule},
//   },
//
//   {
//
//     tabBarPosition: 'top',
//     swipeEnable: true,
//     animatedEnable: true,
//     tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'black',
//     style: {
//         backgroundColor: '#F0E68C',
//
//      },
//      pressColor: 'gray'
//    },
//   }
// );
// export default MainScreenNavigator;
