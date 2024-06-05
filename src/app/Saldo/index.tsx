import { router } from 'expo-router';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react';
export interface SaldoProps {
}

export default function Saldo (props: SaldoProps) {
    return (
    <View style={styles.conteiner}>
        <StatusBar
            barStyle={'default'}
            backgroundColor={'black'}
        />
        <View style={{backgroundColor: '#83D53F', width: '100%', alignItems:'center'}}>
            <Text style={{fontSize: 30, marginTop: 20}}>Renda</Text>
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

});