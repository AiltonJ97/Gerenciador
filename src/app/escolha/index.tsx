import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react';

export interface EscolhaProps {
}

export default function Escolha (props: EscolhaProps) {
    return (
        <View style={styles.conteiner}>
        <StatusBar
          barStyle={'default'}
          backgroundColor={'black'}
        />

        <View style={styles.top}>
            <TouchableOpacity onPress={() => router.replace('/homepage')}>
                <Feather name='arrow-left' size={30}/>
            </TouchableOpacity>
            <Text style={{fontSize: 30}}>       Tipo de Despesa</Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.replace('/Boleto')}>
                <Text style={{fontSize: 30,}}>Boleto</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.replace('/desMensais')}>
                <Text style={{fontSize: 30,}}>Despesas Mensais</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.back()}>
                <Text style={{fontSize: 30,}}>Renda</Text>
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
  top: {
      marginTop: 24,
      backgroundColor: '#83D53F',
      width:'100%',
      flexDirection: 'row'
  },
  button: {
    backgroundColor: '#83D53F',
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 4,
    width: '60%',
    alignItems: 'center',
  }
});
