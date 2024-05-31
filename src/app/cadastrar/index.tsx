import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { auth } from '../config/firebase-config'
import { useState } from 'react';

export interface CadastroProps {
}
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmSenha, setConfirmSenha] = useState('');
const [error, setError] = useState('');
const router = useRouter();

//Função do cadastro de usuário
    const handleCadastro = async({email, senha}:any) => {
        if (senha !== confirmSenha) {
            setError('Senhas Diferentes');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            router.push('/homepage');
            } catch {
            setError('Erro!');
            }
        };

export default function Cadastro (props: CadastroProps) {
    
    return (
      <View style={styles.conteiner}>
        <StatusBar
            barStyle={'light-content'}
        />

        <View style={styles.top}>
            <Text style={styles.texto1}>Cadastro</Text>
        </View>

        <View style={{width: '80%'}}>
            <View style={styles.texto}>
                <TextInput 
                    placeholder='Digite seu login' 
                    placeholderTextColor={'black'} 
                    style={{fontSize: 20}}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.texto}>
                <TextInput 
                    placeholder='Digite sua senha' 
                    placeholderTextColor={'black'} 
                    style={{fontSize: 20}}
                    value={senha}
                    onChangeText={setSenha}    
                />
            </View>

            <View style={styles.texto}>
                <TextInput 
                    placeholder='Confirme senha' 
                    placeholderTextColor={'black'} 
                    style={{fontSize: 20}}
                    value={confirmSenha}
                    onChangeText={setConfirmSenha}
                />
            </View>
            
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
});