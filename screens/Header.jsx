import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    const auth = FIREBASE_AUTH;
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUserEmail(user.email);
      } else {
        // No user is signed in.
        setUserEmail(null);
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer1}>
        <Text style={styles.titlelogout}>logout</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome , </Text>
        <Text style={styles.Mainname}>  {userEmail ? (
        <Text style={styles.text1}> {userEmail}</Text>
      ) : (
        <Text style={styles.text1}>Not logged in</Text>
      )}
      
      </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 10,
  },
  innerContainer1: {
    flexDirection: 'row',
    alignItems: 'center', // Changed alignItems to center
    justifyContent: 'flex-end', // Changed justifyContent to flex-end
    marginRight: 10,
  },
  titlelogout: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    backgroundColor: 'white',
    borderBlockColor: 'grey',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
    Mainname: {
        fontSize: 20,
        
    },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: -5,
  },
  text1: {
    fontSize: 17,
    color: 'black',
    
  },
});

export default Header;
