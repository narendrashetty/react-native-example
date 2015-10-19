/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var HomeScreen = require('./HomeScreen');

var helloWorld = React.createClass({
  renderScene: function(route, navigation) {
    if(route.name === 'home') {
      return (
        <View style={styles.container}>
          <HomeScreen navigator={navigation}/>
        </View>
      );
    }
  },
  render: function() {
    var initialRoute = {name: 'home'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={this.renderScene}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('helloWorld', () => helloWorld);
