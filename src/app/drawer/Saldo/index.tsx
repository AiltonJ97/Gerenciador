import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { Input } from '@rneui/themed';
import { db } from '../../config/firebase-config';
import {setDoc, doc, collection} from '@firebase/firestore';

export interface SaldoProps {
}

export default function Saldo (props: SaldoProps) {
    const [saldo, setSaldo] = useState('');
    const [resultado, setResultado] = useState(0);
    let novoSaldo = parseInt(saldo);

    const handlerCreditar = () => {
        setResultado(novoSaldo+resultado)
        try{
            const Saldo = doc(collection(db, 'Saldo'));
            setDoc(Saldo, {
                Saldo: {saldo}
            })
            Alert.alert('Saldo adicionado!!')
        } catch {
            console.error();
        }
        setSaldo('');
    }

    return (
    <View style={styles.conteiner}>
        <StatusBar
            barStyle={'default'}
            backgroundColor={'black'}
        />

        <View style={{width: "90%", alignItems: 'center', marginTop: 15}}>
            <Input
                style={styles.input}
                label={'Valor adquirido'}
                keyboardType='number-pad'
                value={saldo}
                onChangeText={setSaldo}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handlerCreditar}
            >
                <Text style={{fontSize: 30}}>Creditar</Text>
            </TouchableOpacity>

            <View style={styles.Saldo}>
                <Text style={{fontSize: 25}}>Saldo atual: {resultado}</Text>
            </View>

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
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "black",
        padding: 6,
      },
      button: {
        width: "80%",
        marginTop: 10,
        backgroundColor: "#83D53F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        height: 50
      },
      Saldo:{
        marginTop: 20,
        backgroundColor: "#83D53F",
        width: '90%',
        borderRadius: 15,
        height: '20%',
        justifyContent: 'center',
      }
});