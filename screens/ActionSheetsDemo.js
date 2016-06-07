import React, {
  Component,
} from 'react';

import {
  ActionSheetIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  carbonStyles,
  Content,
  Button,
} from 'carbon-native';

const cs = StyleSheet.create(carbonStyles);

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});

class ActionSheetExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: 'none',
    };
    this.showActionSheet = this.showActionSheet.bind(this);
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }

  render() {
    return (
      <View style={styles.section}>
        <View style={cs.marginBottom}>
          <Button
            color="primary"
            text="Show Action Sheet"
            onPress={this.showActionSheet}
          />
        </View>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }
}

const propTypes = { url: React.PropTypes.string };
class ShareActionSheetExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.showShareActionSheet = this.showShareActionSheet.bind(this);
  }

  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: this.props.url,
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter',
      ],
    },
    (error) => alert(error),
    (success, method) => {
      let text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({ text });
    });
  }

  render() {
    return (
      <View style={styles.section}>
        <View style={cs.marginBottom}>
          <Button
            color="primary"
            text="Show Share Action Sheet"
            onPress={this.showShareActionSheet}
          />
        </View>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
ShareActionSheetExample.propTypes = propTypes;

export default function ActionSheetsDemo() {
  return (
    <Content style={cs.padding}>
      <ActionSheetExample />
      <ShareActionSheetExample url="http://facebook.github.io/react-native/" />
    </Content>
  );
}
