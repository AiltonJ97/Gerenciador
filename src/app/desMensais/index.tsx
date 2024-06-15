import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react';
import { Input, Button } from '@rneui/base';
import {setDoc, doc, collection} from '@firebase/firestore';
import { db } from '../config/firebase-config';

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

        <View style={{width: '80%'}}>
          <Input
            label='Tipo'
            style={styles.input}
            placeholder='Tipo'
            value={nome}
            onChangeText={setNome}
            onPress={() => {
              const Mensais = doc(collection(db, 'Mensais'))
              setDoc(Mensais, {
                Tipo: {nome},
                Valor: {valor}
              })
            }}
          />

          <Input
            label='Valor'
            style={styles.input} 
            placeholder='Valor'
            value={valor}
            onChangeText={setValor}
          />

          <Button
            title='Salvar'
            buttonStyle={styles.button}
            type='clear'
            icon={<Feather name='plus' size={20}/>}
            titleStyle={{fontSize: 20, color:'black'}}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight
    },
    input: {
        fontSize: 25,
        borderWidth: 3,
        borderRadius: 6,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: "#83D53F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
});