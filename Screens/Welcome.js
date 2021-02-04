
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Login from '../Screens/Login';

export default class Welcome extends Component {

    render() {
        return (
            <ImageBackground source={require('../Images/welcome.jpg')}
                style={styles.backImage}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>Hello Welcome To Third Essential Family</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.btn}><Text style={styles.btnText}>Let's Start</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    backImage: {
        flex: 1,
    },

    container: {
        alignItems: 'center',
        top: 80
    },

    mainText: {
        fontSize: 20
    },

    btn: {
        width: '30%',
        backgroundColor: '#FFDF2B',
        height: 50,
        borderRadius: 15,
        top: 190,

    },

    btnText: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 13
    }

});