import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "@/styles/globalStyles";
import { colors } from "@/styles/Colors";
import { ms, vs } from "@/styles/Responsive";

export default function SelectAccountScreen({ navigation }){
    return(
        <LinearGradient 
            className="h-full" 
            colors={[colors.whiteBlue_200, colors.whiteBlue_300, colors.darkBlue_400]}>
                <View>
                    <Text style={[styles.title, {marginTop: 80}]}>Selecione </Text>
                    <Text style={[styles.title, {color: colors.white, fontSize: ms(45)}]}>um tipo de 
                        <Text style={{color: colors.darkBlue_300}}> conta</Text></Text>
                    <Text style={[styles.subtitle, {marginLeft: ms(25),fontSize: ms(25)}]}>para entrar na 
                        <Text style={{color: colors.darkBlue_500}}> vibe</Text></Text>
                </View>
                <View style={styles.box}>
                    <Text style={[styles.title, {color: colors.darkBlue_500, fontSize: ms(40), margin: 5}]}>Venda 
                        <Text style={{color: colors.white}}> de maneira</Text> eficiente</Text>

                </View>
                <View style={[styles.box, {height: ms(230),marginTop: vs(15),}]}>

                </View>
         </LinearGradient>
    )
}



