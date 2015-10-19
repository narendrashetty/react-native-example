'use strict';

var React = require('react-native');

var {
  Image,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} = React;

var StoryItem = React.createClass({
  render: function() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <TouchableElement>
        <View style={styles.row}>
          <Text style={styles.storyTitle}>{this.props.story}</Text>
        </View>
      </TouchableElement>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 5,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
  storyTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
});

module.exports = StoryItem;