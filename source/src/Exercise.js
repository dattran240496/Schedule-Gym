import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import {createStackNavigator, StackNavigator} from 'react-navigation';
import data from './list_muscle.js';
import Chest from '../layout_muscles/Chest.js';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Exercise extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'None'
    }
  }

  static navigationOptions = {
    title: 'Exercise',
    header: null,
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 12
    },
    tabBarIcon: ({focused, tintColor}) => (<Ionicons name={'ios-book'} size={20} color={tintColor}/>)
  };

  renderItem = (item, index) => (<TouchableOpacity onPress={() => this.setState({selected: item.key})} style={{
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 20
    }}>
    <Image resizeMode='cover' source={{
        uri: item.imageUrl
      }} style={{
        width: 100,
        height: 100
      }} />
    <Text style={{
        fontSize: 15,
        color: 'black'
      }}>{item.key}</Text>
  </TouchableOpacity>)

  renderitem1 = (item, index) => (<TouchableOpacity onPress={() => {
      this.props.navigation.navigate('Chest', {
        data: item,
      })
    }} style={{
      width: 100,
      height: 100,
      // backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 20
    }}>
    <Image resizeMode='cover' source={{
        uri: item.imageUrl
      }} style={{
        width: 100,
        height: 100
      }}/>
    <Text style={{
        fontSize: 15,
        color: 'black',
        marginBottom: 20
      }}>{item.excersie}</Text>
  </TouchableOpacity>)

  render() {
    const {navigate} = this.props.navigation;
    return (<ScrollView vertical="vertical" style={{
        marginTop: 20
      }}>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: "#BDB76B"
          }}>Nhóm cơ</Text>
        <FlatList contentContainerStyle={{
            flexDirection: 'column'
          }} numColumns={3} data={data} renderItem={({item, index}) => this.renderItem(item, index)}/>
        <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: "#BDB76B",
            marginBottom: 20
          }}>Giáo án tập</Text>
        <ScrollView horizontal="horizontal">
          <FlatList contentContainerStyle={{
              flexDirection: 'row',
              marginBottom: 15
            }} data={data} renderItem={({item, index}) => this.renderitem1(item, index)}/>
        </ScrollView>

      </View>

    </ScrollView>);

  }

}
