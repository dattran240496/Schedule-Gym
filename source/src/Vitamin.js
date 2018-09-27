import React, { Component } from 'react';
import { AppRegistry, Text, View ,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Exercise extends React.Component{

  static   navigationOptions= {
      title: 'Vitamin',
      header: null,
      tabBarIcon: ({focused, tintColor}) => (<Ionicons name={'ios-medkit'} size={20} color={tintColor}/>)
    };
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Exercise</Text>
      </View>
    );

  }
}
