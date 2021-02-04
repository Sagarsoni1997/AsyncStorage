import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";

const Stack = createStackNavigator();

export default class StackNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    );
  }
}


export { StackNavigation };