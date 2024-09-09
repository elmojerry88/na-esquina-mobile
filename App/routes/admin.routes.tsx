import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHome from '@/screens/AdminScreens/AdminHome';

const Stack = createNativeStackNavigator();
export function AdminRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="admin-home" 
                component={AdminHome} 
                options={{ 
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}


