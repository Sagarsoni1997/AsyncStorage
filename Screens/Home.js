import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Login from './Login';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <ImageBackground source={require('../Images/home.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>
                    <Text style={styles.mainText}>This is Home Screen</Text>
                    <View>
                        <TouchableOpacity onPress={this._logOut}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },

    logoutText: {
        fontSize: 20,
        color: '#fff',
        alignItems: 'flex-start',
        textAlign: 'right'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch'
    }
});