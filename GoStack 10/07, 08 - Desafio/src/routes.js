import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './services/navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="card"
      screenOptions={{
        header: props => {
          return <Header {...props} />;
        },
      }}
    >
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Routes;
