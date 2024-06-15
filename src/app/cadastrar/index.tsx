import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
import { auth, db } from '../config/firebase-config'
import { useState } from 'react';
import { doc, collection, setDoc, addDoc} from '@firebase/firestore'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export interface CadastroProps {
}

export default function Cadastro (props: CadastroProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    //Função do cadastro de usuário
    const handleCadastro = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            router.back();
            const User = doc(collection(db, 'Usuarios'))
            if (User){
                setDoc(User, {
                    id: User.id,
                    Nome: {nome},
                    Email :{email}
                })
            }
        }
        catch {
            (Alert.alert('Não criou o usuario'))
        }
    }

    return (
    <View style={styles.conteiner}>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center', width: '100%'}}>
        <StatusBar
            barStyle={'dark-content'}
        />

        <View style={styles.top}>
            <Text style={{fontSize: 30}}>Cadastro</Text>
        </View>
        <View style={{width: '90%', marginTop: 30}}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

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
                <Text style={{fontWeight: '800', fontSize: 30}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    );
}


const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: "center",
        marginTop: StatusBar.currentHeight
    },
    top: {
        backgroundColor: '#83D53F',
        width: '100%', 
        alignItems:'center'
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
    button: {
        marginTop: 35,
        backgroundColor: "#83D53F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    input: {
        fontSize: 30,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "black",
        padding: 6,
        flexDirection: 'row',
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
});