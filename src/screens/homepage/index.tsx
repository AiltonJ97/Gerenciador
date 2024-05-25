import * as React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export interface HomeProps {
}

export function Home (props: HomeProps) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar 
          barStyle={'default'}
        />
        <Text style={{fontSize: 30}}>Home</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.texto}>1º Item</Text>
          <Text style={styles.texto}>2º Item</Text>
          <Text style={styles.texto}>3º Item</Text>
          <Text style={styles.texto}>4º Item</Text>
          <Text style={styles.texto}>5º Item</Text>
          <Text style={styles.texto}>6º Item</Text>
          <Text style={styles.texto}>7º Item</Text>
          <Text style={styles.texto}>8º Item</Text>
          <Text style={styles.texto}>9º Item</Text>
          <Text style={styles.texto}>10º Item</Text>
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
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
    },
    scrollView: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
});

