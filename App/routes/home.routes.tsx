import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/screens/HomeScreens/Home';

const Stack = createNativeStackNavigator();
export  function HomeRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" 
                component={Home} 
                options={{ 
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}
