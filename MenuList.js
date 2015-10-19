'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Platform,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
} = React;

var MenuList = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return {
      isLoading: false,
      dataSource: dataSource.cloneWithRows(['row 1', 'row 2'])
    };
  },

  renderRow: function(
    data: string,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <TouchableElement
        onPress={() => this.props.onSelectItem(data)}
        onShowUnderlay={highlightRowFunc}
        onHideUnderlay={highlightRowFunc}>
        <View style={styles.themeItem}>
          <Text style={styles.themeName}>
            {data}
          </Text>
        </View>
      </TouchableElement>
    )
  },

  renderHeader: function() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <TouchableElement>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
              <Text style={styles.menuText}>
                Narendra Shetty
              </Text>
            </View>
          </TouchableElement>
          <View style={styles.row}>
            <TouchableElement>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>
                  sub 1
                </Text>
              </View>
            </TouchableElement>
            <TouchableElement>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>
                  sub 2
                </Text>
              </View>
            </TouchableElement>
          </View>
        </View>
        <TouchableElement onPress={() => this.props.onSelectItem(null)}>
          <View style={styles.themeItem}>
            <Text style={styles.homeTheme}>
              Home
            </Text>
          </View>
        </TouchableElement>
      </View>
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          ref="themeListView"
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={{flex:1, backgroundColor: 'white'}}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  header: {
    flex: 1,
    flexDirection: 'column'
  },
  userInfo: {
    flex: 1,
    backgroundColor: '#00a2ed'
  },
  menuText: {
    fontSize: 14,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8
  },
  themeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  homeTheme: {
    fontSize: 16,
    marginLeft: 16,
    color: '#00a2ed'
  },
  themeName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
});



module.exports = MenuList;