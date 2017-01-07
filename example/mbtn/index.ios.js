/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MaterialBtn from './MaterialBtn'
export default class mbtn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialBtn
          rippleColor='rgba(255, 255, 255, 0.2)'
          style={{width: 200, marginBottom: 10, padding: 15, backgroundColor: '#FF7421'}} 
        >
          <Text style={{ color: '#fff' }}>点击</Text>
        </MaterialBtn>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mbtn', () => mbtn);
