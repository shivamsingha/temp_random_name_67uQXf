import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './screenList';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 30
  },
  LoginHeading: {
    flexGrow: 1,
    fontFamily: 'comfortaa_bold',
    fontSize: 36
  },
  RightArrowButton: {
    height: '40%'
  },
  LoginHeadBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextBox: {
    fontFamily: 'roboto_bold',
    fontSize: 17,
    borderRadius: 11,
    borderColor: '#000',
    borderWidth: 3,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  Buttons: {
    backgroundColor: '#A6A6A6',
    borderRadius: 13,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  ButtonContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  LoginButton: {
    flexShrink: 1,
    height: 70,
    width: 70,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 11,
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 20
  },
  LoginButtonText: {
    color: '#000'
  },
  GoogleButtonText: {
    color: '#fff',
    fontFamily: 'roboto_bold',
    fontSize: 17
  },
  GoogleIcon: {
    height: 24,
    width: 24,
    marginRight: 13
  }
});

const Login: React.FC<Props> = ({ navigation }) => {
  const toLogedOutScreen = (): void => navigation.navigate('LoggedOut');
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.LoginHeadBox}>
        <Text style={styles.LoginHeading}>Log In</Text>
        <Touchable
          style={[styles.Buttons, styles.LoginButton]}
          onPress={toLogedOutScreen}>
          <Image
            source={require('../assets/RightArrow.png')}
            style={styles.RightArrowButton}
            resizeMode="center"
          />
        </Touchable>
      </View>
      <TextInput
        style={styles.TextBox}
        placeholder="Phone Number or Email address"
        placeholderTextColor="#C4C4C4"
        keyboardType="email-address"
        autoFocus
      />
      <TextInput
        style={styles.TextBox}
        placeholder="Password"
        placeholderTextColor="#C4C4C4"
        secureTextEntry
      />
      <Touchable style={[styles.Buttons]}>
        <View style={[styles.ButtonContainer]}>
          <Image
            source={require('../assets/google-brands.png')}
            style={styles.GoogleIcon}
            resizeMode="center"
          />
          <Text style={styles.GoogleButtonText}>Log In with Google</Text>
        </View>
      </Touchable>
    </SafeAreaView>
  );
};

export default Login;
