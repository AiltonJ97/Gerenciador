import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/homepage";
import { NavigationContainer } from "@react-navigation/native";
import { Criar } from "../screens/criarDespesas";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return  (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}