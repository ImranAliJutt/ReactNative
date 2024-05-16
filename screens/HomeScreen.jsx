import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity ,ImageBackground} from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
  const HomeScreen = ({ navigation }) => {
    const goToRegister = () => {
      navigation.navigate('Register'); // Navigates to the 'Register' screen
    };
   
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const auth = FIREBASE_AUTH;

    const logIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        navigation.navigate('MainPage');
      } catch (error) {
        console.error('Failed to log in:', error);
      }
    };

  return (
    <ImageBackground   source={require('../assets/bg.jpg')}
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
       
    
      <Image
        source={require('../assets/logomain.png')}
        style={styles.logo}
      />
      <Text style={styles.logotext}>Welcome, Back</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => logIn()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.createAccount}>
        <Text style={styles.createText}>Create new account</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
     
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D12525',
    marginTop: -50,
    width: '100%',
    opacity: 0.94, 
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 0,
  },
  logotext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: -20,
    marginBottom: 40,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccount: {
    flexDirection: 'row',
    marginTop: 20,
  },
  createText: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  signUpButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
