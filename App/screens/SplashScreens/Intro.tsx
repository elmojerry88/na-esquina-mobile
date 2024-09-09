import { Image, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "@/styles/globalStyles";
import { Button } from "@/components/button/Button";
import { colors } from "@/styles/Colors";

export default function Intro({ navigation }){

    return(
        <LinearGradient 
            className="h-full flex-col" colors={[colors.whiteBlue_200, colors.whiteBlue_300, colors.darkBlue_400]}
            style={[styles.container, {flexDirection: 'column',}]}>

            <View style={{flex: 4, alignItems: "center", marginTop: 20,}}>
                <Image 
                    source={require('assets/splash/fundo-01.png')} 
                    style={styles.fundo}
                    className=""/>
            </View>
            <View 
                style={{flex: 3, marginTop: 30,}}>
                <Text style={styles.title}>
                        Olá, {"\n"} Bem-vindo/a 
                </Text>
                <Text style={[styles.subtitle, {marginLeft: 30,}]}>
                        a sua loja online
                </Text>
                <Button 
                    label="Começar"
                    style={{ 
                        width: 150,
                        alignItems: 'center',
                        justifyContent: "center",
                        height: 40,
                        borderRadius: 30,
                        marginTop: 3,
                        marginLeft: 30,
                        backgroundColor: colors.whiteBlue_300
                    }}
                    onPress={() => navigation.navigate('select-account')}
                />
            </View>
            <View 
                style={{flex: 3,justifyContent: 'center',}}>
                <Image source={require('assets/splash/yacht.png')} 
                    style={styles.yacht}/>
            </View>
         </LinearGradient>
    )
}


