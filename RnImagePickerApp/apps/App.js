/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

//yarn add react-native-image-picker
//# RN < 0.60
// react-native link react-native-image-picker

import ImagePicker from 'react-native-image-picker';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: { uri: 'https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg' },
    };
  }
  showPicker = () => {
    const options = {
      title: '이미지 선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      cancelButtonTitle: '취소',
      // customButtons: [
      //   { name: 'kb', title: '카카오톡 이미지선택' }
      // ]
      storageOptions: {
        skipBackup: true,  //iOS / android는 적용안됨
        path: 'Pictures/images/',
        privateDirectory: true,
      },
    };
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        alert('취소하였습니다');
      } else if (res.error) {
        alert(`에러:${res.error}`);
      } else if (res.customButton) {
        //커스텀 버튼이 있을경우 해당 버튼 눌렀을때 일어나는 곳
      } else {
        //선택된 이미지 경로 가져오기
        const uri = { uri: res.uri };
        this.setState({ img: uri });
      }
    });
  }
  render() {
    return (
      <View style={styles.body}>
        <Button title="이미지선택" onPress={this.showPicker} />
        <Text children={this.state.img.uri} style={styles.urlText} />
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: '#e9e9e9',
  },
  urlText: {
    fontSize: 12,
    color: '#000000',
    margin: 8,

  },
  image: {
    backgroundColor: '#1877f2',
    marginTop: 8,
    flex: 1,
    borderRadius: 10,
  }
});
