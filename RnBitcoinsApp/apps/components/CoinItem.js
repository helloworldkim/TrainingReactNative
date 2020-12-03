/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class CoinItem extends Component {
  // 천단위로 콤마(,) 찍을수있게 해주는 정규표현식
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() {
    console.log(this.props.iconUri);

    return (
      <View style={styles.subContainer}>
        <Image
          style={styles.coin}
          source={{ uri: this.props.iconUri }} />
        <View style={styles.coinDetail}>
          <Text children={this.props.name} style={styles.coinName} />
          <Text
            children={this.numberWithCommas(this.props.volume)}
            style={{ color: '#ffffff' }}
          />
          <Text children={this.numberWithCommas(this.props.price)} />
          <Text children={this.props.rank} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 3,
    borderRadius: 8,
  },
  coin: {
    width: 64,
    height: 64,
  },
  coinDetail: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  coinName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    width: 100,
  },
});
