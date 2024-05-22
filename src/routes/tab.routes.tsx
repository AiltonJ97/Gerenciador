import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Criar } from "../screens/criarDespesas";
import Feather from 'react-native-vector-icons/Feather'
import { Home } from "../screens/homepage";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: () => <Feather name="home" size={20} />
                    }}
                />
                <Tab.Screen
                    name="Criar"
                    component={Criar}
                    options={{
                        tabBarIcon: () => <Feather name="file-text" size={20}/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}