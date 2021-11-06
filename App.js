/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

import { Home } from "./src/views";

const App = () => {

  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
};
export default App;
