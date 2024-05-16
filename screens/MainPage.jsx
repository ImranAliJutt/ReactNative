import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet ,ImageBackground } from 'react-native';
import Header from './Header';
import BannerImage from './BannerImage';
import Categories from './Catogeries';
import SubCategories from './SubCategories';

const MainPage = () => {

  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>

    <Header />
    <BannerImage />
    <Categories />
    <SubCategories />
    
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  container: {
    backgroundColor: '#fff',
     flex: 1,
     opacity: 0.95,
   }
   ,
   backgroundImage: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center" ,
   
   }
});

export default MainPage;
