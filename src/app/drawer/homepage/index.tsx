import * as React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { StyleSheet, Text, Share} from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Saldo from '../Saldo';
import { Button } from '@rneui/themed';

export interface HomeProps {
}

export default function Home (props: HomeProps) {
  
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://youtu.be/izGwDsrQ1eQ?si=cwq-vwu3iXqQGKCV',
        title: 'Home'
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Compartilhado com tipo de atividade:', result.activityType);
        } else {
          console.log('Compartilhado');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Compartilhamento descartado');
      }
    } catch (error) {
      console.error('Erro ao compartilhar', error);
    }
  };
  
  return (
    <GestureHandlerRootView style={styles.container}> 
      <View>
        
      </View>

      <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', flex: 1}}>
        <Button title={'Logout'} buttonStyle={styles.button} titleStyle={{fontSize: 20}} onPress={() => router.replace('/(login)')}/>
        <Button title={'Compartilhar'} titleStyle={{fontSize: 20}} onPress={handleShare} buttonStyle={styles.button1} />
      </View>
      
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    scrollView: {
      width: '100%',
      flexDirection: 'column'
    },
    itemText: {
      fontSize: 20,
      width: '90%'
    },
    button: {
      backgroundColor: 'red',
      marginTop: 30,
      borderColor: 'black',
      borderRadius: 8,
      borderWidth: 2,
    },
    button1: {
      backgroundColor: 'blue',
      marginTop: 30,
      borderColor: 'black',
      borderRadius: 8,
      borderWidth: 2,
    }

});

