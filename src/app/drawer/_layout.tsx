import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Relatorio from './Relatorio';
import Awesome from 'react-native-vector-icons/FontAwesome6'
import Home from './homepage';
import Saldo from './Saldo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: '#83D53F'}}}>
        <Drawer.Screen name='Home' component={Home} options={{drawerIcon:() => <Awesome name='house'/>, 
        headerRight: () => (
          <TouchableOpacity style={styles.Button} onPress={() => router.replace('../escolha')}>
            <Awesome name='plus' size={25}/>
          </TouchableOpacity>) }}/>
        <Drawer.Screen name="Relatorio" component={Relatorio} options={{drawerIcon: () => <Awesome name='file'/>}}/>
        <Drawer.Screen name='Saldo' component={Saldo} options={{drawerIcon: () => <Awesome name='brazilian-real-sign'/>}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Button:{
    marginRight: 10,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DrawerNavigator;