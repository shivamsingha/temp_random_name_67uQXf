import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { Screens } from '@myapp/common';
enableScreens();

const { LoggedOut, Login, Signup, SignupEmail, SignupMakeProfile } = Screens;
const Stack = createStackNavigator<Screens.RootStackParamList>();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoggedOut" headerMode="none">
      <Stack.Screen name="LoggedOut" component={LoggedOut} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="SignupMakeProfile" component={SignupMakeProfile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
