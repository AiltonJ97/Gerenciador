import * as React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Saldo from '../Saldo';

export interface HomeProps {
}

export default function Home (props: HomeProps) {
  
  return (
    <GestureHandlerRootView style={styles.container}> 
      <View>
        <TouchableOpacity onPress={() => router.replace('/escolha')}>
          <Feather name='plus-circle' size={30}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Saldo {}</Text>
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
});

