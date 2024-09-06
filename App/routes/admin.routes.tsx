import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHomeScreen from '@/screens/AdminScreens/AdminHomeScreen';

const Stack = createNativeStackNavigator();
export function AdminRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="admin" 
                component={AdminHomeScreen} 
                options={{ 
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}


