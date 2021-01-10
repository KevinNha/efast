import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Text, View } from 'react-native';

import ChannelScreen from './src/components/ChannelScreen';
import ChannelListDrawer from './src/components/ChannelListDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <View style={styles.drawerContainer}>
          <Drawer.Navigator
            drawerContent={ChannelListDrawer}
            drawerStyle={styles.drawerNavigator}>
            <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: 'black',
    width: 350,
    color: 'white',
  },
});
