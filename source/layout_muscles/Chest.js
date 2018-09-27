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
import {Header, Icon, Tile,Avatar,SearchBar} from 'react-native-elements';
import data from '../list/list_chest_exercise.js';
import Ionicons from 'react-native-vector-icons'
export default class Chest extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

  renderItem = (item, index) => (<TouchableOpacity style={{
      flex: 1,
      flexDirection: 'row'
    }}>
    <Image  source={{
        uri: item.imageUrl
      }} style={{
        width: 100,
        height: 100,
        margin: 5
      }}></Image>
    <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>

      <Text style={{
          fontSize: 15,
          color: 'black'
        }}>{item.key}</Text>

      <Text style={{
          fontSize: 15,
          color: 'black'
        }}>{item.dec}</Text>

    </View>

  </TouchableOpacity>)

  render() {

    const {navigate} = this.props.navigation;
    console.log("data", this.props.navigation.getParam('data'))
    return (<View style={{
        flex: 1
      }}>
      <Header leftComponent={{
          icon: 'undo', // MaterialIcons
          color: '#fff',
          onPress: () => {
            this.props.navigation.navigate('Excersie')
          }
        }}/>

        <SearchBar
          lightTheme
          round
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />

      <FlatList data={data} renderItem={({item, index}) => this.renderItem(item, index)}/>
    </View>);

  }
}
