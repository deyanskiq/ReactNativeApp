import React, {Component} from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    //add flex: 1 to expand the screen to see the whole components
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumsList />
      </View>
    );
  }
}
