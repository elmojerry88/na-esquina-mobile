import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


const Stack = createNativeStackNavigator();

export function Router(){

  const auth = false;

    return (
        <NavigationContainer>
          {auth? <AppRoutes/> : <AuthRoutes/>}
      </NavigationContainer>
    )
}