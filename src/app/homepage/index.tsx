import * as React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { useState } from 'react';
export interface HomeProps {
}

export default function Home (props: HomeProps) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle={'default'}
      />
      <Text style={{fontSize: 30, flexDirection: 'row'}}>Home
      <TouchableOpacity onPress={() => router.replace('/criarDespesas')}>
        <Feather name='plus-circle' size={30}/>
      </TouchableOpacity>
      </Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>
          <Feather name='credit-card' color={'#83D53F'} size={25}/>
          1º Item</Text>
      </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#9CD53F'
    },
    texto: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 25,
    },
    scrollView: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
});

