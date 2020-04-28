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

type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

type Props = {
  navigation: SignupScreenNavigationProp;
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
  SignupHeading: {
    flexGrow: 1,
    fontFamily: 'comfortaa_bold',
    fontSize: 36
  },
  RightArrowButton: {
    height: '40%'
  },
  SignupHeadBox: {
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
    borderRadius: 13,
    marginVertical: 10,
    backgroundColor: '#A6A6A6'
  },
  SignupButton: {
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
  SignupButtonText: {
    color: '#000'
  },
  GoogleButtonText: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: 'roboto_bold',
    fontSize: 17
  }
});

const Signup: React.FC<Props> = ({ navigation }) => {
  const toSignupMakeProfileScreen = (): void =>
    navigation.navigate('SignupMakeProfile');
  const toSignupEmailScreen = (): void => navigation.navigate('SignupEmail');
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.SignupHeadBox}>
        <Text style={styles.SignupHeading}>Sign Up</Text>
        <Touchable
          style={[styles.Buttons, styles.SignupButton]}
          onPress={toSignupMakeProfileScreen}>
          <Image
            source={require('../assets/RightArrow.png')}
            style={styles.RightArrowButton}
            resizeMode="center"
          />
        </Touchable>
      </View>
      <TextInput
        style={styles.TextBox}
        placeholder="Phone Number"
        placeholderTextColor="#C4C4C4"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        returnKeyType="go"
        onSubmitEditing={toSignupMakeProfileScreen}
        autoFocus
        enablesReturnKeyAutomatically
      />
      <Touchable style={[styles.Buttons]} onPress={toSignupEmailScreen}>
        <Text style={styles.GoogleButtonText}>Use Email Instead</Text>
      </Touchable>
    </SafeAreaView>
  );
};

export default Signup;
