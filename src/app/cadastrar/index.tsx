import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import { auth } from '../config/firebase-config'
import { useState } from 'react';

export interface CadastroProps {
}

export default function Cadastro (props: CadastroProps) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    //Função do cadastro de usuário
        const handleCadastro = async () => {
               await createUserWithEmailAndPassword(auth, email, senha)
                .then(() => router.back())
                .catch(erro => Alert.alert('Não criou o usuario'))
        }
    
    return (
      <View style={styles.conteiner}>
        <StatusBar
            barStyle={'light-content'}
        />

        <View style={styles.top}>
            <Text style={styles.texto1}>Cadastro</Text>
        </View>
        <View style={{width: '80%'}}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                placeholder='Digite sua senha' 
                placeholderTextColor={'black'} 
                style={styles.input}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}  
            />

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={{fontWeight: '800', fontSize: 25}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: "center",
    },
    top: {
       marginTop: 10, 
       backgroundColor: 'white',
       width:'100%',
       marginBottom: 60,
    },
    texto:{
        marginBottom: 15,
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "black",
        alignItems:'center',
        padding: 6,
        width:"100%",
        flexDirection: 'row',
    },
    texto1: {
       backgroundColor:'#9CD53F',
       fontSize: 30,
       width: '100%',
       fontWeight: '600',
       textAlign: 'center'
    },
    button: {
        marginTop: 14,
        backgroundColor: "#83D53F",
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8, 
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
});