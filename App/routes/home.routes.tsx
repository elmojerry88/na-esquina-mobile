import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreens/HomeScreen';

const Stack = createNativeStackNavigator();
export  function HomeRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" 
                component={HomeScreen} 
                options={{ 
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}
