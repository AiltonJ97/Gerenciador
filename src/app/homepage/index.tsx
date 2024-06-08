import * as React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { doc, collection, getDoc } from '@firebase/firestore'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { db } from '../config/firebase-config';
import { Button } from '@rneui/base';

export interface HomeProps {
}

export default function Home (props: HomeProps) {

  return (
    <GestureHandlerRootView style={styles.container}> 
      <StatusBar 
        barStyle={'default'}
        backgroundColor={'black'}
      />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => router.replace('/escolha')}>
          <Feather name='plus-circle' size={30}/>
        </TouchableOpacity>
        <Text style={{fontSize: 30}}>                 Home</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>
          <Feather name='credit-card' color={'#83D53F'} size={25}/>
        </Text>
      </ScrollView>
      <Button
        title='Press'
        onPress={() => getDoc(doc(db, 'Valores', 'Boleto'))
          .then(resultado => {
            console.log(resultado.data())
          })

        }
      />
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#9CD53F'
    },
    top: {
      marginTop: 26,
      backgroundColor: '#83D53F',
      width:'100%',
      flexDirection: 'row'
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

