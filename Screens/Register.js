import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Login from "../Screens/Login";

export default class Register extends Component {

    render() {
        return (
            <ImageBackground source={require('../Images/register.jpg')}
                style={styles.backgroundImage}>
                <View style={styles.container}>

                    <Text style={styles.mainText}>
                        Please Register YourSelf !
               </Text>

                    <TextInput placeholder='Username'
                        style={styles.textInput}
                        onChangeText={(newUserName) => this.setState({ newUserName })}
                    ></TextInput>

                    <TextInput placeholder='Password'
                        style={styles.textInput}
                        onChangeText={(newPassword) => this.setState({ newPassword })}
                    ></TextInput>

                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.touchableText}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.dntHaveAccnt}>
                            Already have an Account   Login here.</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
};

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch'
    },

    container: {
        alignItems: 'center',
        top: 100
    },

    mainText: {
        fontSize: 25,
        color: '#fff'
    },

    textInput: {
        borderWidth: 1,
        width: '80%',
        borderRadius: 15,
        margin: 10,
        backgroundColor: 'white'
    },

    touchable: {
        width: '60%',
        backgroundColor: '#4666F9',
        height: 50,
        borderRadius: 15
    },

    touchableText: {
        fontSize: 15,
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },

    dntHaveAccnt: {
        fontSize: 15,
        margin: 5,
        color: 'white'
    }

});
