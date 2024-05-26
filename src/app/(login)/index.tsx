import 'react-native-gesture-handler';
import * as React from 'react';
import { router } from 'expo-router';
import { auth } from '../config/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { View, Text ,StyleSheet, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface LoginProps {
}


export default function LoginScreen (props: LoginProps) {  
  const [email, setEmail] = React.useState('');
  const [senha, setsenha] = React.useState('');
  
  //cria um usuário usando email e senha
createUserWithEmailAndPassword(auth, email, senha)
          //Opcionalmente para saber se criou com sucesso
          .then(usuario => console.log('usuario criado'))
          //Opcionalmente para se falhou ao criar usuário
          .catch(error => console.log('Não criou usuário'))

  const handleLogin = () => {
    if (email === email && senha === '123') {
      router.push('homepage');
    } else {
      alert('Falha no login!! \n' + 'E-mail ou senha incorretos');
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >     
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
        
        <TouchableOpacity style={styles.buttonCria}>
          <Text style={{fontWeight: 'bold'}}>Criar nova Conta</Text>
        </TouchableOpacity>      
      </KeyboardAwareScrollView>  
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
