import { Stack, Tabs } from "expo-router";
import Feather from 'react-native-vector-icons/Feather' 

export default function Layout(){
    return(
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'green',
                tabBarIcon: () => <Feather name="home" size={25}/>
            }} 
        />
    );
}