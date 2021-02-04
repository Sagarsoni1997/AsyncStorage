import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Register from '../Screens/Register';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../Screens/Home';


const userInfo = { username: 'admin', password: 'sagar123' }

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getLoginStatus()
  }

  _login = async () => {
    if (userInfo.username === this.state.username &&
      userInfo.password === this.state.password) {
      await AsyncStorage.setItem('islogged', '1');
      this.props.navigation.navigate('Home');
    }
    else {
      alert('You Entered Wrong Details')
    }
  }


  getLoginStatus = async () => {
    let login = await AsyncStorage.getItem('islogged');
    if (login == 1) {
      this.props.navigation.replace('Home');
    }
  }

  render() {
    return (
      <ImageBackground source={require('../Images/login.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.mainText}>
            Please Login Here....!!</Text>

          <TextInput placeholder='  Username'
            style={styles.textInput}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            autoCapitalize='none'
          >
          </TextInput>

          <TextInput placeholder='  Password' secureTextEntry
            style={styles.textInput}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            autoCapitalize='none'
          >
          </TextInput>

          <TouchableOpacity style={styles.touchable}
            onPress={this._login}
          >
            <Text style={styles.touchableText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'column', margin: 1 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.touchableText}>
                Don't have an Account??Register here.</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.touchableText}>
                Forgot Password</Text>
            </TouchableOpacity>
          </View>

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
    top: 80
  },

  mainText: {
    fontSize: 25
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
    backgroundColor: 'green',
    height: 50,
    borderRadius: 15
  },

  touchableText: {
    fontSize: 15,
    textAlign: 'center',
    padding: 15,
    color: 'white'
  }

});
