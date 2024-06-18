import * as React from 'react';
import { Share, TouchableOpacity, View, StyleSheet, Text, ScrollView} from 'react-native';
import { doc, collection, getDocs, getDoc } from '@firebase/firestore'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { db } from '../../config/firebase-config';
import { Button } from '@rneui/base';
import { useState, useEffect } from 'react';

export interface RelatorioProps {
}

export default function Relatorio (props: RelatorioProps) {
  const [valor, setValor] = useState<any[]>([]);
  
  const handlerBuscar = async () => {
    const snapshots = await getDocs(collection(db, 'Valores'));
    const dados: any[] = [];
    
    snapshots.forEach(snapshot => {
      dados.push(snapshot.data())
    });
    
    setValor(dados);

  }

  useEffect(() => {
    handlerBuscar();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView  style={styles.scrollView}>
      {valor.map((valor,index) => (
          <View key={index} style={styles.view}>
              <Text style={styles.itemText}>Valor: {valor.Valor.valor+'\n'}Vencimento:{valor.Vencimento.vencimento}</Text>
          </View>
      ))}
      </ScrollView>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    scrollView: {
      width: '100%',
      flexDirection: 'column',
    },
    view:{
      backgroundColor: 'red',
      marginTop: 10,
      borderRadius: 8,

    },
    itemText: {
      marginLeft: 15,
      fontSize: 20,
    },
});