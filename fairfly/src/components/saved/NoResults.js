import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../../styles/colors';

export default class NoResults extends Component {
  render() {
  	return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>
Hello Professor,
        </Text>
        <Text style={styles.description}>
This is the account unit tab logOut.     </Text>
        <Text style={styles.description}>
If you want to get back to the first screen just press the buttno bellow
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableHighlight style={styles.findHomesButton}>
          <Text style={styles.findHomesButtonText}>
Sign Out
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  	);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: colors.gray04,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray04,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footer: {
  	position: 'absolute',
  	width: '100%',
  	height: 80,
  	bottom: 0,
  	borderTopWidth: 1,
  	borderTopColor: colors.gray05,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  findHomesButton: {
  	paddingTop: 15,
  	paddingBottom: 15,
  	marginTop: 16,
  	borderRadius: 3,
  	backgroundColor: colors.pink,
  },
  findHomesButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
