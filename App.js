import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import Splash from './screens/Splash';
import MainPage from './screens/MainPage';
import Hamburherdetailpage from './screens/Hamburherdetailpage';
import Cart from './screens/Cart';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="MainPage" component={MainPage} />
         <Stack.Screen name="Hamburherdetailpage" component={Hamburherdetailpage} />
         <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
