import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image , Button , TouchableOpacity } from 'react-native';
import { Link, useNavigation  } from '@react-navigation/native';
import { useState } from 'react';
const HamburgerDetailPage = () => {
    const imagePath = require('../assets/hamburgeranimation.gif');
    
    const navigation = useNavigation();
    const [count, setCount] = useState(1);
  

    const Increase = () => {
        setCount(count + 1);
       
    };
    const Decrease = () => {
        if (count > 1) {
            setCount(count - 1);
          
        }
    };

    const checkout = () => {
       navigation.navigate('Cart' , { count: count});
       
    };

    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
            
            <View style={styles.container}>

                <View style={styles.innerContainer1}>
                <Image style={styles.imagelogo} source={require('../assets/logomain.png')} />
                <Text style={styles.head}>Mr Burger</Text>
                <Text style={styles.head2}>Logout</Text>
                </View>

                <Text style={styles.text}>Hamburger Burger</Text>
                <Image source={imagePath} style={[styles.image]} />
                <View style={styles.imageContainer}>
                    <Text style={styles.Price}>Only For - </Text>
                    <Text style={styles.Price2}> $12.50 </Text>
                </View>
                <View >
                    
                <Text style={styles.items}> 
                Patty of ground beef , Two halves of a bun , Slices of raw onion , lettuce ,  Mayonnaise, bacon , Salad ,  and other ingredients and flavor can be added on request. 
                 </Text>
                </View>
                <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.button} onPress={Decrease}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.buttonText2}>{count}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={Increase}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.cartButton} onPress={checkout}>
                    <Text style={styles.buttonTextcart}>Add to Cart</Text>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
        top: 45,
        left: 0,
        width: 60,
        height: 60,
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
        backgroundColor:'#D12525',
        color:'#fff',
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
        color:'#fff',
        justifyContent: 'flex-end',
        borderBlockColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
    },
    items: {
        fontSize: 18,
        color: 'black',
        position: 'absolute',
        top: -40,
        left: -190,
        textAlign: 'center',
        margin: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        
    },
    imageContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    cartButton: {
        top: 560,
        position: 'absolute',
        marginTop: 10,
        paddingLeft: 34,
        paddingRight: 34,
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 5,
        backgroundColor: '#D12525',
        alignItems: 'center',
        marginTop: 60,
    },
    buttonTextcart: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        paddingLeft: 12,
        paddingRight: 12,
        
    },
    buttoncontainer:{
     position: 'absolute',
     flexDirection: 'row', 
     alignItems: 'center', 
     top: 500,
     backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        borderLeftColor: 'grey',
        borderLeftWidth: 1,
        borderRightColor: 'grey',
        borderRightWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        marginTop: 30,


    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        
    },
    buttonText: {
        color: '#D12525',
        fontSize: 25,
        fontWeight: 'bold',
          
    },
    buttonText2: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    Price2: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D12525',
        marginLeft: 5, 
        top: -40,
        marginTop: 50,
        
      },
    Price: {
        top: -40,
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 50,
    },
      
    image: {
        position: 'absolute',
        width: 230,
        height: 230,
        alignContent: 'center',
        alignItems: 'center',
        top: 100,
        left: 90,
        flexDirection: 'row',
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: 0.95,
    },
    text: {
        fontSize: 35,
        color: 'black',
        position: 'absolute',
        top: 325,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 30,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },

});

export default HamburgerDetailPage;
