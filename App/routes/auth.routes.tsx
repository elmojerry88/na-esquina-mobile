import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreens from '@/screens/SplashScreens/SplashScreens';
import LoginScreen from '@/screens/AuthScreens/LoginScreen';

const Stack = createNativeStackNavigator();
export function AuthRoutes(){

    const isFirstTime = false;

    return(
        <Stack.Navigator initialRouteName={isFirstTime? 'intro' : 'login'}>
            <Stack.Screen name="intro" 
                component={SplashScreens} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="login" 
                component={LoginScreen} 
                options={{ 
                headerShown: false,
            }}
        />
      </Stack.Navigator>
    )
}


//Só chama as splashScreens quando aperta para criar uma conta
// Verificar se é a primeira vez do usuário na aplicação