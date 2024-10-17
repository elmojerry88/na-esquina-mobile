
import { View, Text, ScrollView, ImageBackground} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "@/styles/Colors";
import { styles } from "@/styles/globalStyles";
import { ms, vs } from "@/styles/Responsive";


const background = require('assets/auth/background-create-store.png');

export default function CreateStore(){
    return (
        <LinearGradient 
        colors={[colors.whiteBlue_200, colors.whiteBlue_300, colors.darkBlue_400]}
        style={[styles.container, {flexDirection: 'column',}]}>
            <ImageBackground source={require('assets/auth/background-create-store.png')}
            style={{flex: ms(1), width: ms(350), height: ms(780), marginTop: ms(5), alignSelf: "center", alignItems: "flex-start"}}>
                <ScrollView style={{}}>
                    <Text style={[styles.title, {fontSize: vs(45), color: colors.darkBlue_500, marginTop: ms(60)}]}>
                        Cria {"\n"}uma loja
                    </Text>
                    <Text style={[styles.subtitle, {fontSize: vs(25), color: colors.darkBlue_500, marginTop: ms(0), marginLeft: ms(25)}]}>
                        e cresça connosco
                    </Text>
                </ScrollView>
            </ImageBackground>
        </LinearGradient>
    )
     
}