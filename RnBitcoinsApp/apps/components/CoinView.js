/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import CoinItem from './CoinItem';
import { getCoinIconUri } from '../data/constants';

const sampleData = [
  {
    'circulating_supply': 18556575,
    'cmc_rank': 1,
    'date_added': '2013-04-28T00:00:00.000Z',
    'id': 1,
    'last_updated': '2020-11-28T11:27:02.000Z',
    'max_supply': 21000000,
    'name': 'Bitcoin',
    'num_market_pairs': 9550,
    'platform': null,
    'quote': [Object],
    'slug': 'bitcoin',
    'symbol': 'BTC',
    'tags': [Array],
    'total_supply': 18556575,
  },
  {
    'circulating_supply': 113610761.999,
    'cmc_rank': 2,
    'date_added': '2015-08-07T00:00:00.000Z',
    'id': 1027,
    'last_updated': '2020-11-28T11:27:02.000Z',
    'max_supply': null,
    'name': 'Ethereum',
    'num_market_pairs': 5775,
    'platform': null,
    'quote': [Object],
    'slug': 'ethereum',
    'symbol': 'ETH',
    'tags': [Array],
    'total_supply': 113610761.999,
  },
];
//하루 10회 조회가능(무료로 사용하는 api)
const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',   //url
  method: 'GET',  //요청타입  
  headers: {
    'content-type': 'application/json', //데이터타입
    'X-CMC_PRO_API_KEY': '3afc668d-a5d8-4119-8073-e56b2adde234', //api키
  },
});

export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    // this.getCoinData();

    // setInterval(() => {
    //   this.getCoinData();
    // }, 10000); //10초마다 갱신
  }
  getCoinData = async () => {
    this.setState({ isLoading: true });
    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: { limit: 10 },
        })
        .then(res => {
          console.log('API 조회완료');
          this.setState({ coinData: res.data.data, isLoading: false });
          console.log(this.state.coinData);
        })
        .catch(err => {
          console.log('client get error:', err);
        });
    } catch (error) {
      console.log('getCoinData() error:', error);
    }
  }
  render() {
    let coinItems = this.state.coinData.map((item, index) => {
      // let coinItems = sampleData.map((item, index) => {
      const { cmc_rank, name, num_market_pairs, total_supply, symbol } = item; //필요한 데이터만 사용
      return (
        <CoinItem
          key={index}
          name={name}
          rank={cmc_rank}
          price={num_market_pairs}
          volume={total_supply}
          symbol={symbol}
          iconUri={getCoinIconUri(name)}
        />
      );
    });
    return (
      <View>
        <Button title="재조회" onPress={this.getCoinData} />
        <ScrollView>
          <View style={styles.container}>
            {coinItems}
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
});