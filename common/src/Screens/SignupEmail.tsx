import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './screenList';

type SignupEmailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignupEmail'
>;

type Props = {
  navigation: SignupEmailScreenNavigationProp;
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
  RightArrowButton: {
    height: '40%'
  },
  SignupEmailHeadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
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
  SignupEmailButton: {
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
  }
});

const SignupEmail: React.FC<Props> = ({ navigation }) => {
  const toSignupMakeProfileScreen = (): void =>
    navigation.navigate('SignupMakeProfile');
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.SignupEmailHeadBox}>
        <Touchable
          style={[styles.Buttons, styles.SignupEmailButton]}
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
        placeholder="Email address"
        placeholderTextColor="#C4C4C4"
        keyboardType="email-address"
        textContentType="emailAddress"
        returnKeyType="go"
        onSubmitEditing={toSignupMakeProfileScreen}
        autoFocus
        enablesReturnKeyAutomatically
      />
    </SafeAreaView>
  );
};

export default SignupEmail;
