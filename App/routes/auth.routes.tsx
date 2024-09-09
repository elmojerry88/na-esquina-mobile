import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '@/screens/SplashScreens/Intro';
import LoginUser from '@/screens/AuthScreens/LoginUser';
import SelectAccount from '@/screens/SplashScreens/SelectAccount';

const Stack = createNativeStackNavigator();
export function AuthRoutes(){

    const isFirstTime = true;

    return(
        <Stack.Navigator initialRouteName={isFirstTime? 'intro' : 'login'}>
            <Stack.Screen name="intro" 
                component={Intro} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="select-account" 
                component={SelectAccount} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="login" 
                component={LoginUser} 
                options={{ 
                headerShown: false,
            }}
        />
      </Stack.Navigator>
    )
}
