import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react';
export interface CriarProps {
}

export default function Criar (props: CriarProps) {
  const [valor, setValor] = useState('') 
  const [vencimento, setVencimento] = useState('')

  return (
    <View style={styles.conteiner}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={'black'}
      />

      <View style={styles.top}>
        <Text style={{fontSize: 30, marginTop: 20}}>Boleto</Text>
      </View>

      <View style={{width: '80%'}}>
        <TextInput 
          style={styles.input} 
          placeholder='Valor R$0,00'
          value={valor}
          onChangeText={setValor}
        />
        <TextInput 
          style={styles.input} 
          placeholder='Vencimento'
          
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
  texto: {
    textAlign: 'center',
    backgroundColor:'#83D53F',
    fontSize: 30,
    width: '100%',
    fontWeight: '600',
    alignItems: 'center',
  },
  top: {
    backgroundColor: '#83D53F', 
    width: '100%', 
    alignItems:'center'
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