import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './screenList';

type LoggedOutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoggedOut'
>;

type Props = {
  navigation: LoggedOutScreenNavigationProp;
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CenterText: {
    fontFamily: 'comfortaa_bold',
    fontSize: 30,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 20
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
    height: 110,
    flexDirection: 'row'
  },
  Buttons: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 13,
    marginVertical: 24
  },
  LoginButton: {
    borderColor: '#000',
    borderWidth: 5,
    backgroundColor: '#fff',
    marginHorizontal: 30
  },
  SignupButton: {
    backgroundColor: '#A6A6A6',
    marginRight: 30
  },
  ButtonText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'roboto_bold',
    fontSize: 19
  },
  LoginButtonText: {
    color: '#000'
  },
  SignupButtonText: {
    color: '#fff'
  }
});

const LoggedOut: React.FC<Props> = ({ navigation }) => {
  const toLoginScreen = (): void => navigation.navigate('Login');
  const toSignupScreen = (): void => navigation.navigate('Signup');
  return (
    <SafeAreaView>
      <StatusBar translucent barStyle="light-content" backgroundColor="#000" />
      <ImageBackground
        source={require('../assets/LoggedOutBackground.jpg')}
        style={styles.ImageBackground}>
        <Text style={styles.CenterText}>TITLE</Text>
      </ImageBackground>
      <View style={styles.BottomContainer}>
        <Touchable
          style={[styles.Buttons, styles.LoginButton]}
          onPress={toLoginScreen}>
          <Text style={[styles.ButtonText, styles.LoginButtonText]}>
            LOG IN
          </Text>
        </Touchable>
        <Touchable
          style={[styles.Buttons, styles.SignupButton]}
          onPress={toSignupScreen}>
          <Text style={[styles.ButtonText, styles.SignupButtonText]}>
            SIGN UP
          </Text>
        </Touchable>
      </View>
    </SafeAreaView>
  );
};

export default LoggedOut;
