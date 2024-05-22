import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import StackRoutes from '../../routes/stack.routes';

export interface LoginProps {
}

export function LoginScreen (props: LoginProps) {  
  return (
      <View style={styles.container}>
        
        <Image 
          source={require('./assets/inter.png')}
          style={styles.logo}
        />
        
        <Text style={styles.titulo}>Seja Bem-Vindo</Text>
        
        <View style={styles.texto}>
          <Text style={{ fontWeight: '800', color: 'white'}}>Login: </Text>
          <TextInput placeholder='Digite seu login' placeholderTextColor={'white'}/>
        </View>
        
        <View style={styles.texto}>
          <Text style={{fontWeight: '800', color: 'white'}}>Senha: </Text>
          <TextInput placeholder='Digite sua senha' placeholderTextColor={'white'}/>
        </View>
        
        <TouchableOpacity style={styles.button}
        onPress={() => }>
          <Text style={{fontWeight: '800'}}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonCria}>
          <Text style={{fontWeight: 'bold'}}>Criar nova Conta</Text>
        </TouchableOpacity>
      
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#9CD53F',
      flex: 1,
      alignItems: 'center',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    logo: {
        marginTop: 60,
        marginBottom: 30,
    },
    titulo:{
      color: "black",
      fontSize: 20,
      marginTop: 14,
      height: 100,
      alignItems: 'center',
      justifyContent: "center",
    },
    texto:{
      borderWidth: 3,
      borderRadius: 12,
      borderColor: "white",
      alignItems:'center',
      padding: 6,
      width:"80%",
      flexDirection: 'row',
    },
    button: {
      marginTop: 14,
      backgroundColor: "white",
      width: "80%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8, 
    },
    buttonCria:{
      marginTop: 12,
      fontSize: 12,
    }
});
