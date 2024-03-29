import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
// import { Provider } from 'react-redux';
// import store from './store';

// react-native run-android --deviceId=9487ce99

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <LoginScreen />
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
