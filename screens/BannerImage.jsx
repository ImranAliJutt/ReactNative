import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BannerImage = () => {
  // Replace this with the path to your single image
  const imagePath = require('../assets/Mr.gif');

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height:200,
  },
  image: {
    width: width,
    height:200,
    resizeMode: 'cover',
  },
});

export default BannerImage;
