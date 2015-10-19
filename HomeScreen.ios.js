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
var Drawer = require('react-native-drawer');
var Toolbar = require('react-native-navbar');

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
      theme: null,
    });
  },
  _renderNavigationView: function() {
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
    var drawer = <MenuList onSelectItem={this.onSelectMenu} />;
    return (
      <Drawer
        ref={DRAWER_REF}
        openDrawerOffset={100}
        panCloseMask={1}
        content={drawer} >
        
        <StoriesList data={this.state.data} navigator={this.props.navigator}/>
      </Drawer>
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