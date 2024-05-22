import * as React from 'react';
import { ViewBase } from 'react-native';
import { View, StyleSheet, Text} from 'react-native';
import { LoginScreen } from '../login';


export interface HomeProps {
}

export function Home (props: HomeProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Home</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#9CD53F'
    },
    texto: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
    }
});

