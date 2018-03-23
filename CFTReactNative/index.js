import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    );
  }
   componentDidMount () {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 1000,
      delay: 500,
    })
  }
  
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('CarbonFootprintTracker', () => HelloWorld);