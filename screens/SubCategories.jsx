import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

const SubCategories = () => {
  const [category, setCategory] = useState('Hamburger');
  const navigation = useNavigation();
 const goToDetails = () => {
    if(category === 'Hamburger'){
      navigation.navigate('Hamburherdetailpage');
    }
 }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <TouchableOpacity onPress={() => setCategory('Hamburger')}>
            <View style={[styles.category, category === 'Hamburger' && styles.selectedCategory]}>
              <Text style={styles.label}>Hamburger</Text>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('Lamb')}>
            <View style={[styles.category, category === 'Lamb' && styles.selectedCategory]}>
              <Text style={styles.label}>Lamb</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('Cheese')}>
            <View style={[styles.category, category === 'Cheese' && styles.selectedCategory]}>
              <Text style={styles.label}>Cheese</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCategory('Pepperoni')}>
            <View style={[styles.category, category === 'Pepperoni' && styles.selectedCategory]}>
              <Text style={styles.label}>Pepperoni</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.content}>
        <View style={styles.item}>
          <Image source={require('../assets/Hamburger.jpg')} style={[styles.image, category !== 'Hamburger' && styles.hidden]} />
          <Image source={require('../assets/Lamb.jpg')} style={[styles.image, category !== 'Lamb' && styles.hidden]} />
          <Image source={require('../assets/cheese.png')} style={[styles.image, category !== 'Cheese' && styles.hidden]} />
          <Image source={require('../assets/pepperoni.png')} style={[styles.image, category !== 'Pepperoni' && styles.hidden]} />
          
          <Text style={styles.Title}>{category === 'Hamburger' ? 'Ham Burger' : 'Lamb Burger'}</Text>
          
          <Text style={styles.priceContainer}>
          <Text style={styles.Price}>Starting </Text> 
           <Text style={styles.Price2}>{category === 'Hamburger' ? '12.50 $' : ''}</Text>
           <Text style={styles.Price2}>{category === 'Lamb' ? '15.25 $' :''}</Text>
           <Text style={styles.Price2}>{category === 'Cheese' ? '10.25 $' :''}</Text>
           <Text style={styles.Price2}>{category === 'Pepperoni' ? '16.25 $' :''}</Text>
           </Text>

           <TouchableOpacity onPress={goToDetails}>
          <Text style={styles.detailsbutton}>Let's Go</Text>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 20,
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedCategory: {
    backgroundColor: '#D12525', 
    color: '#fff', 
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000', 

  },
  content: {
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  
  },
  hidden: {
    display: 'none',
  },
  Title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  Price: {
    fontSize: 20,
  },
  Price2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D12525',
    marginLeft: 5, 
  
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, 
    paddingLeft: 10, 
  },
  detailsbutton: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#D12525',
    padding: 10,
    width: 250,
    textAlign: 'center',
    borderRadius: 5,

  },
});

export default SubCategories;
