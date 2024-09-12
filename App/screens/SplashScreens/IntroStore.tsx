import { View, Text, Image, ImageBackground} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "@/styles/globalStyles";
import { colors } from "@/styles/Colors";
import { ms, vs } from "@/styles/Responsive";
import AntDesign  from '@expo/vector-icons/AntDesign';
import { Button } from "@/components/button/Button";


export default function IntroStore( {navigation} ){
    return (
        <LinearGradient className="h-full flex-col" colors={[colors.darkBlue_400, colors.whiteBlue_300, colors.darkBlue_400]}
        style={[styles.container, {flexDirection: 'column',}]}>
            <View style={{alignItems: "center", marginTop: vs(20),}}>
                <Image 
                    source={require('assets/splash/fundo-intro-store-01.png')} 
                    style={[styles.fundo, {height: ms(300), width: ms(400)}]}/>
            </View>
            <View style={{marginTop: vs(5),}}>
            <View style={[styles.box, {height: ms(170), borderRadius: 30, 
                backgroundColor: colors.darkBlue_400}]}>
                    <Text style={[styles.title, {fontSize: vs(45), color: colors.ligthBlue_100, marginTop: ms(5)}]}>
                        Aceleramos <Text style={[styles.title, {fontSize: vs(45), color: colors.white}]}> o seu </Text>
                        negócio
                    </Text>
                    <Text style={[styles.subtitle, {fontSize: vs(18), marginLeft: ms(25)}]}>
                        tenha a sua loja, visível para um público crescente e diversigficado</Text>

            </View>
            <View style={[styles.box, {height: ms(100), marginTop: vs(15), 
                borderRadius: 30, backgroundColor:  colors.darkBlue_400}]}>
                    <Text style={[styles.title, {fontSize: vs(40), marginTop: ms(5), color: colors.white}]}>Somos 
                        <Text style={[styles.title, {fontSize: vs(40), color: colors.ligthBlue_100}]}> solução</Text>
                    </Text>
                    <Text style={[styles.subtitle, {fontSize: vs(25), marginLeft: ms(25)}]}>
                        para o seu <Text style={{color: colors.ligthBlue_100}}> crescimento</Text>
                    </Text>
            </View>
        </View>
            <View style={{flexDirection: 'row'}}>
            <ImageBackground source={require('assets/splash/fundo-intro-store-02.png')} resizeMode='contain' 
                style={{width: ms(300), height: ms(250), marginTop:ms(0)}}>
                    <View style={{alignSelf: 'flex-end'}}>
                        <Button 
                        label="a seguir"
                        labelSize={{fontSize: 24}}
                        style={{ 
                            flexDirection: "row",
                            width: ms(140),
                            alignItems: 'center',
                            justifyContent: "center",
                            height: ms(40),
                            borderRadius: 30,
                            marginTop: vs(80),
                            backgroundColor: colors.darkBlue_400}}
                        onPress={() => navigation.navigate('create-store')}
                        icon={<AntDesign name="arrowright" size={24} color='white'/>}/>
                    </View>
            </ImageBackground>

        </View>

        </LinearGradient>
    )
}