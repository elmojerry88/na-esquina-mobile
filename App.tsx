import { Router } from "./App/routes/Router";
import { useFonts } from 'expo-font';
import { Kavoon_400Regular } from '@expo-google-fonts/kavoon';




export default function App() {
  let [fontsLoaded] = useFonts({
    Kavoon_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Router/>
  );
}

