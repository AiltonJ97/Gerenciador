import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Relatorio from './Relatorio';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Relatorio" component={Relatorio} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;