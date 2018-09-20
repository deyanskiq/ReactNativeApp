import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};


  componentWillMount() {
    //function setState comes from Component;
    //its purpose is to say that there is new data and to rerender it
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
    <AlbumDetail key={album.title} albumData={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
