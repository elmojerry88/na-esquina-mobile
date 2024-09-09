import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '@/screens/SplashScreens/Intro';
import LoginUser from '@/screens/AuthScreens/LoginUser';
import SelectAccount from '@/screens/SplashScreens/SelectAccount';
import Loginstore from '@/screens/AuthScreens/LoginStore';
import CreateUser from '@/screens/AuthScreens/CreateUser';
import CreateStore from '@/screens/AuthScreens/CreateStore';
import IntroUser from '@/screens/SplashScreens/IntroUser';
import IntroStore from '@/screens/SplashScreens/IntroStore';

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
            <Stack.Screen name="intro-user" 
                component={IntroUser} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="intro-store" 
                component={IntroStore} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="select-account" 
                component={SelectAccount} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="login-user" 
                component={LoginUser} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="login-store" 
                component={Loginstore} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="create-user" 
                component={CreateUser} 
                options={{ 
                headerShown: false,
            }}/>
            <Stack.Screen name="create-store" 
                component={CreateStore} 
                options={{ 
                headerShown: false,
            }}/>
      </Stack.Navigator>
    )
}
