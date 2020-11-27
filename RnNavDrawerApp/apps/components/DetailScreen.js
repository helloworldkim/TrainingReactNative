/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import React, { Component } from 'react';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text>Detail UI</Text>
                <View style={styles.button}>
                    <Button
                        title="open Drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    />
                    <Button
                        title="toggle Drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    />

                </View>
            </View>
        );

    }
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flexDirection: 'row',
    },
});

export default DetailScreen;