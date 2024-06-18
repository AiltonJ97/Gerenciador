import { Stack, Tabs, router } from 'expo-router';
import LoginScreen from './(login)';
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity ,StyleSheet } from 'react-native';
import Awesome from 'react-native-vector-icons/FontAwesome6'
import Cadastro from './cadastrar';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: styles.top }}>
      <Stack.Screen name='Boleto/index' options={{headerTitle: 'Boleto', headerTitleStyle: {fontSize: 25} ,headerLeft: () => (
          <TouchableOpacity style={styles.Button} onPress={() => router.replace('/escolha')}>
            <Awesome name='arrow-left' size={25}/>
          </TouchableOpacity>) }}/>
      <Stack.Screen name='desMensais/index' options={{headerTitle: 'Mensais',  headerTitleStyle: {fontSize: 25} ,headerLeft: () => (
        <TouchableOpacity style={styles.Button} onPress={() => router.replace('drawer/homepage')}>
          <Awesome name='arrow-left' size={30}/>
        </TouchableOpacity>)}}/>
      <Stack.Screen name='escolha/index' options={{headerTitle: 'Despesas', headerTitleStyle: {fontSize: 25} ,headerLeft: () => (
        <TouchableOpacity style={styles.Button} onPress={() => router.replace('drawer/homepage')}>
          <Awesome name='arrow-left' size={30}/>
        </TouchableOpacity>)
      }}/>
      <Stack.Screen name='drawer' options={{headerShown: false}}/>
      <Stack.Screen name='cadastrar/index' options={{headerTitle: 'Cadastro', headerTitleStyle: {fontSize: 25} ,headerLeft: () => (
        <TouchableOpacity style={styles.Button} onPress={() => router.replace('/(login)')}>
          <Awesome name='arrow-left' size={30}/>
        </TouchableOpacity>)}}/>
      <Stack.Screen name='(login)/index' options={{headerShown: false}}/>
    </Stack> 
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#83D53F',
  },
  Button:{
    marginRight: 10,
    borderRadius: 30,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
});