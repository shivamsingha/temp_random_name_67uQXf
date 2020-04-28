import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
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

type SignupMakeProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignupMakeProfile'
>;

type Props = {
  navigation: SignupMakeProfileScreenNavigationProp;
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
  SignupMakeProfileHeading: {
    flexGrow: 1,
    fontFamily: 'comfortaa_bold',
    fontSize: 36
  },
  RightArrowButton: {
    height: '40%'
  },
  SignupMakeProfileHeadBox: {
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
  SignupMakeProfileButton: {
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
  SignupMakeProfileButtonText: {
    color: '#000'
  },
  GoogleButtonText: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: 'roboto_bold',
    fontSize: 17
  },
  ProfilePicContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#A6A6A6',
    borderRadius: 100,
    marginBottom: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 11,
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 25
  },
  ProfilePic: {
    width: '100%'
  },
  ProfilePicText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'roboto_bold',
    fontSize: 18,
    textShadowColor: '#555',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 20
  }
});

const SignupMakeProfile: React.FC<Props> = ({ navigation }) => {
  const toLogedOutScreen = (): void => navigation.navigate('LoggedOut');
  const [profilePicSource, setprofilePicSource] = useState(
    '../assets/RightArrow.png'
  );
  const changeProfilePic = (): void =>
    setprofilePicSource('../assets/dummy1.png');
  let secondTextInput: TextInput;
  const setref = (input: TextInput) => {
    secondTextInput = input;
  };
  const nextTextInput = (): void => secondTextInput.focus();
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Touchable style={styles.ProfilePicContainer} onPress={changeProfilePic}>
        <ImageBackground
          source={{ uri: profilePicSource }}
          style={styles.ProfilePic}
          resizeMode="center">
          <Text style={styles.ProfilePicText}>Add Profile Picture</Text>
        </ImageBackground>
      </Touchable>
      <View style={styles.SignupMakeProfileHeadBox}>
        <Text style={styles.SignupMakeProfileHeading}>Make Profile</Text>
        <Touchable
          style={[styles.Buttons, styles.SignupMakeProfileButton]}
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
        placeholder="User Name"
        placeholderTextColor="#C4C4C4"
        keyboardType="email-address"
        textContentType="username"
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={nextTextInput}
        autoFocus
        enablesReturnKeyAutomatically
      />
      <TextInput
        ref={setref}
        style={styles.TextBox}
        placeholder="Password"
        placeholderTextColor="#C4C4C4"
        textContentType="password"
        returnKeyType="go"
        onSubmitEditing={toLogedOutScreen}
        secureTextEntry
        enablesReturnKeyAutomatically
      />
    </SafeAreaView>
  );
};

export default SignupMakeProfile;
