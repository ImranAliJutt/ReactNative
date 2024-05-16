import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image , Button , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  { useState } from 'react';
const Cart = ({ route }) => {
    const imagePath = require('../assets/hamburgeranimation.gif');
    
    const navigation = useNavigation();
    const { count} = route.params;
    const [value , setvalue] = useState(12.50);

    const checkout = () => {
       // navigation.navigate('MainPage');
       alert('Item added to cart');
    };

  

    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
            
            <View style={styles.container}>
                <View style={styles.innerContainer1}>
                    <Image style={styles.imagelogo} source={require('../assets/cart.png')} />
                    <Text style={styles.head}>My Cart</Text>
                    <Text style={styles.head2}>Cancel</Text>
                </View>
                <View style={styles.summary}>
                    <Text style={styles.text}>Order Summary</Text>
                    <Text style={styles.text1}>Hamburger: {count}</Text>
                    <Text style={styles.text2}>Total: ${value * count}</Text>
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
        summary: {
        flexDirection: 'column',
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    innerContainer1: {
        flexDirection: 'row',
        top: 0,
        position: 'absolute',
        justifyContent: 'flex-end',
        right: 0,
        left: 0,
        padding: 10,
    },
    imagelogo: {
        position: 'absolute',
        top: 55,
        left: 10,
        width: 40,
        height: 40,
        zIndex: 1,
    },
    head: {
        fontSize: 25,
        color: 'black',
        position: 'absolute',
        top: 50,
        left: -170,
        right: 0,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor:'#fff',
        color:'#D12525',
        alignContent:'left',
        alignItems:'left',
        justifyContent:'left',
    },
    head2: {
        fontSize: 15,
        color: 'black',
        position: 'absolute',
        top: 56,
        left: 250,
        right: 10,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.8,
        color:'#000',
        justifyContent: 'flex-end',
        borderBlockColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: 0.95,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default Cart;
