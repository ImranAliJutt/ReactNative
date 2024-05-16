import React, { useEffect } from 'react';
import { Text, View ,ImageBackground , StyleSheet , Image} from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.backgroundImage}
    >
     
      <View style={styles.background}>
        <View style={styles.container}>
          <Image
            source={require('../assets/logomain.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Mr.Burger</Text>
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
  background: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    backgroundColor: '#D12525', 
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.95, 
  },
  container: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    top: -30,
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: -40,
    opacity: 1, 
  },
  text: {
    color: '#ffff',
    fontSize: 34,
    fontWeight: '900',
    opacity: 1, 

  },
});

export default Splash;
