import * as React from 'react';
import { StatusBar, TouchableOpacity, View, } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { doc, collection, getDocs } from '@firebase/firestore'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { db } from '../config/firebase-config';
import { Button } from '@rneui/base';
import { useState, useEffect } from 'react';

export interface HomeProps {
}

export default function Home (props: HomeProps) {
  
  const [valor, setValor] = useState<any[]>([]);
  
  const handlerBuscar = async () => {
    const snapshot = await getDocs(collection(db, 'Valores'));
    const dados: any[] = [];
    
    snapshot.forEach(snapshot => dados.push(snapshot.data()));
    
    setValor(dados);
  }

  useEffect(() => {
    

    handlerBuscar();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}> 
      <View style={styles.top}>
        <TouchableOpacity onPress={() => router.replace('/escolha')}>
          <Feather name='plus-circle' size={30}/>
        </TouchableOpacity>
        <Text style={{fontSize: 30}}>                 Home</Text>
      </View>
      {valor.map(valor => (
        <View key={valor.data} style={styles.scrollView}>
            <Text style={styles.itemText}>{valor.valor} {valor.vencimento}</Text>
        </View>
      ))}
      
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    top: {
      
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#83D53F',
      width:'100%',
      flexDirection: 'row'
    },
    scrollView: {
      width: '100%',
      flexDirection: 'column'
    },
    itemText: {
      fontSize: 20,
      width: '90%'
    },
});

