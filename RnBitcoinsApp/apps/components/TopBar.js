/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text children={this.props.title} style={styles.title} />
          <Text style={{ textAlign: 'center' }}>{this.props.refreshDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
