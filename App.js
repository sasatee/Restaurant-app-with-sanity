
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Restaurant from "./screens/RestaurantScreen";
import BasketScreen from './screens/BasketScreen';
import { store } from './Store';
import { Provider } from 'react-redux';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Basket" 
          component={BasketScreen}
          options={{presentation:"modal",headerShown:false}}
          
          
          
          />
      </Stack.Navigator>

      </Provider>
     
    </NavigationContainer>
  );
}




