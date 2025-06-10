import * as React from 'react';
import BottomTab from './src/navigation/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/index';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
}
