import { Image, ImageBackground, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "@/styles/globalStyles";
import { Button } from "@/components/button/Button";
import { colors } from "@/styles/Colors";
import { ms, vs } from "@/styles/Responsive";
import AntDesign  from '@expo/vector-icons/AntDesign';

export default function IntroUser( {navigation} ){
    return (
        <LinearGradient 
        className="h-full flex-col" colors={[colors.whiteBlue_200, colors.whiteBlue_300, colors.darkBlue_400]}
        style={[styles.container, {flexDirection: 'column',}]}>

        <View style={{alignItems: "center", marginTop: vs(20),}}>
            <Image 
                source={require('assets/splash/fundo-user-delivery.png')} 
                style={styles.fundo}/>
        </View>
        <View style={{marginTop: vs(5),}}>
            <View style={[styles.box, {height: ms(170), borderRadius: 30, 
                backgroundColor: colors.darkBlue_400}]}>
                    <Text style={[styles.title, {fontSize: vs(45), color: colors.white, marginTop: ms(5)}]}>
                        Entregas super <Text style={[styles.title, {fontSize: vs(45), color: colors.ligthBlue_100}]}> rápidas</Text>
                    </Text>
                    <Text style={[styles.subtitle, {fontSize: vs(19), marginLeft: ms(25)}]}>
                        estamos ansiosos para atendê-lo, o mais rápido possivel</Text>

            </View>
            <View style={[styles.box, {height: ms(100), marginTop: vs(15), 
                borderRadius: 30, backgroundColor:  colors.darkBlue_400}]}>
                    <Text style={[styles.title, {fontSize: vs(40), marginTop: ms(5), color: colors.white}]}>A sua 
                        <Text style={[styles.title, {fontSize: vs(40), color: colors.ligthBlue_100}]}> satisfação</Text>
                    </Text>
                    <Text style={[styles.subtitle, {fontSize: vs(30), marginLeft: ms(25)}]}>
                        é a nossa <Text style={{color: colors.ligthBlue_100}}> missão</Text>
                    </Text>
            </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <ImageBackground source={require('assets/splash/fundo-intro-user-delivery-01.png')} resizeMode='contain' 
                style={{width: ms(300), height: ms(200), marginTop:ms(20)}}>
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
                        onPress={() => navigation.navigate('login-user')}
                        icon={<AntDesign name="arrowright" size={24} color='white'/>}/>
                    </View>
            </ImageBackground>

        </View>
     </LinearGradient>
    )
}