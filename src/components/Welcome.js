import React, { Component } from 'react';
import { Text } from 'react-native';
import View from 'react-native-view';

class Welcome extends Component {
  render() {
    //because we will reference 'this' in our callback we need to bind the context
    return (
     <View vcenter hcenter>
       <Text style={styles.textStyle}>Welcome</Text>
     </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30
  }
};

export default Welcome;
