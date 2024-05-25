import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

export interface CriarProps {
}

export function Criar (props: CriarProps) {
  return (
    <View style={styles.conteiner}>
      <StatusBar
        barStyle={'default'}
      />
      <View style={styles.top}>
        <TouchableOpacity>
          <Feather name='arrow-left' size={30}/>
        </TouchableOpacity>
        <Text style={styles.texto}>Criar Despesas</Text>
      </View>
      <TextInput style={styles.input} placeholder='Valor R$0,00'/>
      <TextInput style={styles.input} placeholder='Vencimento'/>
      <TouchableOpacity style={styles.button}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 
  conteiner:{
    flex: 1,
    alignItems: "center",
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
    alignItems: 'center',
    width:'100%',
    flexDirection: 'row'
  },
  input: {
    justifyContent: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    width: 60,
    borderRadius: 4
  },
  
});