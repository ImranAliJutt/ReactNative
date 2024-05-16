import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cat}>Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cat: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10, 
    marginLeft: 20,
  },
  
});

export default Categories;
