import * as React from 'react';
import {StyleSheet ,View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase-config';

export interface LoginProps {
}


export default function LoginScreen (props: LoginProps) {  
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push('/homepage');
    } catch (err) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>     
        <Image 
          source={require('./assets/inter.png')}
          style={styles.logo}
        />
        
        <Text style={styles.titulo}>Seja Bem-Vindo</Text>
        
        <View style={styles.texto}>
          <TextInput 
            placeholder='Digite seu login'
            placeholderTextColor={'white'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType='email-address'
            style={{width: '80%'}}
          />
        </View>
        
        <View style={styles.texto}>
          <TextInput
          placeholder='Digite sua senha'
          placeholderTextColor={'white'}
          value={senha}
          onChangeText={setsenha}
          secureTextEntry
          style={{width: '80%'}}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonCria} onPress={() => router.push('/cadastrar')}>
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
