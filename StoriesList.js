'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Platform,
  Dimensions,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React

var ViewPager = require('react-native-viewpager');
var StoryItem = require('./StoryItem');

var StoriesList = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    var headerDataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      isLoading: false,
      isLoadingTail: false,
      dataSource: dataSource.cloneWithRows(['row 1', 'row 2']),
      headerDataSource: headerDataSource.cloneWithPages(['header1', 'header2'])
    };
  },
  renderHeader: function() {
    return (
      <View style={{flex: 1, height: 200}}>
        <ViewPager
          dataSource={this.state.headerDataSource}
          style={styles.listHeader}
          renderPage={this.renderPage}
          isLoop={true}
          autoPlay={true} />
      </View>
    );
  },
  renderPage: function(
    story: string,
    pageID: number | string
  ) {
    return (
      <TouchableOpacity style={{flex: 1}}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}
            numberOfLines={2}>
            {story}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  renderSectionHeader: function(header) {
    return (
      <Text style={styles.sectionHeader}>Section Title</Text>
    );
  },
  renderRow: function(data) {
    return (
      <StoryItem
        story={data}
      />
    );
  },
  render: function() {
    return (
      <ListView
        ref="ListView"
        dataSource={this.state.dataSource}
        style={styles.listview}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
        renderHeader={this.renderHeader}
      />
    );
  }
});

var styles = StyleSheet.create({
  listview: {
    backgroundColor: '#FAFAFA'
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  sectionHeader: {
    fontSize: 14,
    color: '#888888',
    margin: 10,
    marginLeft: 16,
  },
});

module.exports = StoriesList;