import React from 'react';
import { StyleSheet, } from 'react-native';
import { LoginScreen } from './src/screens/login';
import { Home } from './src/screens/homepage';
import { Criar } from './src/screens/criarDespesas';
import Routes from './src/routes';
import { Cadastro } from './src/screens/cadastrar';
import StackRoutes from './src/routes/stack.routes';
import TabRoutes from './src/routes/tab.routes';

export default function App() {
  return (<TabRoutes/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
