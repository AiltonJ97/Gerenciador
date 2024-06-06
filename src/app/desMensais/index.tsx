import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react';

export interface MensaisProps {
}

export default function Mensais (props: MensaisProps) {
    const [nome, setNome] = useState('') 
    const [valor, setValor] = useState('')
    
    return (
      <View style={styles.conteiner}>
        <StatusBar
          barStyle={'default'}
          backgroundColor={'black'}
        />
         <View style={{backgroundColor: '#83D53F', width: '100%', alignItems:'center'}}>
            <Text style={{fontSize: 30, marginTop: 20}}>Mensais</Text>
        </View>

        <View style={{width: '80%'}}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome'
          value={nome}
          onChangeText={setNome}
        />

        <TextInput 
          style={styles.input} 
          placeholder='Valor'
          value={valor}
          onChangeText={setValor}
        />


        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 30}}>Salvar</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    input: {
        fontSize: 30,
        marginTop: 35,
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "black",
        padding: 6,
        flexDirection: 'row',
    },
    button: {
        marginTop: 35,
        backgroundColor: "#83D53F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
      
});