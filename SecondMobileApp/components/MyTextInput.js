/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { TextInput, KeyboardAvoidingView, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

class MyTextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmail = (text) => {
        this.setState({ email: text });
    };
    handlePassword = (text) => {
        this.setState({ password: text });
    };
    login = () => {
        // eslint-disable-next-line no-alert
        alert(`email:${this.state.email}\npassword:${this.state.password}`);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled>
                <TextInput
                    style={style.input}
                    placeholder={'email'}
                    onChangeText={this.handleEmail}
                    value={this.state.email}
                />
                <TextInput
                    style={style.input}
                    placeholder={'password'}
                    onChangeText={this.handlePassword}
                    value={this.state.password}
                    secureTextEntry
                // secureTextEntry={true}
                />
                {/* <Button
                    onPress={() => this.login()}
                    title="로그인"
                /> */}
                <TouchableOpacity style={style.submitButton} onPress={() => this.login()}>
                    <Text children={'submit'} style={style.submitText} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}
const style = StyleSheet.create({
    input: {
        margin: 20,
        height: 40,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        borderRadius: 10,
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});
export default MyTextInput;
