/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        this.items = [
            {
                navOptionIcon: 'home',       //아이콘이름(fontawesome)
                navOptionName: 'HOME',       //메뉴표시이름
                screenName: 'Home',    //스크린이름
            },
            {
                navOptionIcon: 'road',       //아이콘이름(fontawesome)
                navOptionName: 'DETAIL',       //메뉴표시이름
                screenName: 'Detail',    //스크린이름
            },
            {
                navOptionIcon: 'gear',       //아이콘이름(fontawesome)
                navOptionName: 'SETTING',       //메뉴표시이름
                screenName: 'Setting',    //스크린이름
            },
        ];
    }

    render() {
        return (
            <View style={styles.drawer}>
                <Image source={require('./images/cat.png')}
                    style={styles.profile}
                />
                <View style={styles.menuGroup}>
                    {this.items.map((item, index) =>
                        <View key={index}
                            style={styles.menuItem}
                        >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screenName)}>
                                <View style={styles.touch}>
                                    <Icon name={item.navOptionIcon} size={25}> </Icon>
                                    <Text children={item.navOptionName} />
                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#bbb',
        alignItems: 'baseline',
    },
    profile: {
        resizeMode: 'cover',
        width: '100%',
        height: 150,
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuGroup: {
        backgroundColor: 'white',
        width: '100%',
    },
    menuItem: {
        paddingTop: 8,
        paddingLeft: 10,
    },
});
export default CustomDrawer;
