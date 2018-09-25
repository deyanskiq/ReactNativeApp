import React, {Component} from 'react';
import Router from './Router';

export default class App extends Component {
  render() {
    //add flex: 1 to expand the screen to see the whole components
    return (
      <Router />
      // <View style={{flex: 1}}>
      //   <Header headerText={'Albums'} />
      //   <AlbumsList />
      // </View>
    );
  }
}
