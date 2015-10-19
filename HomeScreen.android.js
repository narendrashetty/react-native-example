'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Dimensions,
  ToolbarAndroid
} = React;

var MenuList = require('./MenuList');
var StoriesList = require('./StoriesList');

var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
var toolbarActions = [
  {title: 'Tab 1', show: 'always'},
  {title: 'Tab 2', show: 'never'},
  {title: 'Tab 3', show: 'never'}
];

var HomeScreen = React.createClass({
  getInitialState: function() {
    return ({
      data: null,
    });
  },
  renderNavigationView: function() {
    return (
      <MenuList
        onSelectItem={this.onSelectMenu}
      />
    );
  },

  onSelectMenu: function(data) {
    this.refs[DRAWER_REF].closeDrawer();
    this.setState({data: data});
  },

  render: function() {
    var title = this.state.data ? this.state.data : 'Home';
    return (
      <DrawerLayoutAndroid
        ref={DRAWER_REF}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNavigationView}>
        <View style={styles.container}>
          <ToolbarAndroid
            title={title}
            titleColor="white"
            style={styles.toolbar}
            actions={toolbarActions} />
            <StoriesList data={this.state.data} navigator={this.props.navigator} />
        </View>
      </DrawerLayoutAndroid>

    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  toolbar: {
    backgroundColor: 'red',
    height: 56,
  }
});

module.exports = HomeScreen;