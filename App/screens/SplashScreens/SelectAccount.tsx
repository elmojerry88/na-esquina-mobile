import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "@/styles/globalStyles";
import { colors } from "@/styles/Colors";
import { ms, vs } from "@/styles/Responsive";
import { Button } from "@/components/button/Button";

export default function SelectAccount({ navigation }){
    return(
        <LinearGradient 
            className="h-full" 
            colors={[colors.whiteBlue_200, colors.whiteBlue_300, colors.darkBlue_400]}>
                <View>
                    <Text style={[styles.title, {marginTop: ms(80)}]}>Selecione </Text>
                    <Text style={[styles.title, {color: colors.white, fontSize: ms(45)}]}>um tipo de 
                        <Text style={{color: colors.darkBlue_300}}> conta</Text></Text>
                    <Text style={[styles.subtitle, {marginLeft: ms(25),fontSize: ms(25)}]}>para entrar na 
                        <Text style={{color: colors.darkBlue_500}}> vibe</Text></Text>
                </View>
                <View style={styles.box}>
                    <Text style={[styles.title, {color: colors.darkBlue_500, fontSize: ms(40), margin: 5}]}>Venda 
                        <Text style={{color: colors.white}}> de maneira</Text> eficiente</Text>
                    <Text style={[styles.subtitle, {color: colors.white, fontSize: ms(20), marginLeft: ms(25)}]}>Oferecemos 
                        <Text style={{color: colors.darkBlue_500}}> ferramentas </Text>para a 
                        <Text style={{color: colors.darkBlue_500}}> gestão do seu negócio,</Text> seja de pequeno, médio ou grande porte</Text>
                    <Button 
                        label='Criar Loja'
                        style={{
                            width: 300,
                            alignItems: 'center',
                            justifyContent: "center",
                            alignSelf: "center",
                            height: 50,
                            borderRadius: 30,
                            marginTop: 5,
                            backgroundColor: colors.darkBlue_500,
                        }}
                        onPress={() => navigation.navigate('create-store')}
                        labelSize={{fontSize:40}}
                    />
                    <View style={{marginLeft: ms(25), alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={[styles.subtitle, {fontSize: vs(19), marginTop: 1}]}>Já tem uma loja? 
                            <Button label=' faça login' onPress={() => navigation.navigate('login-store')} 
                            labelSize={{fontSize: vs(18)}} colorText={{color: colors.darkBlue_500}}/>
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, {height: ms(250),marginTop: vs(15),}]}>
                    <Text style={[styles.title, {marginTop: ms(5), fontSize: ms(43)}]}>Junte-se 
                        <Text style={[styles.title, {color: colors.white, fontSize: ms(43)}]}> aos nossos clientes
                            </Text> satisfeitos
                    </Text>
                    <Button 
                        label='Criar conta'
                        style={{
                            width: 300,
                            alignItems: 'center',
                            justifyContent: "center",
                            alignSelf: "center",
                            height: 50,
                            borderRadius: 30,
                            marginTop: 5,
                            backgroundColor: colors.darkBlue_500,
                        }}
                        onPress={() => navigation.navigate('create-user')}
                        labelSize={{fontSize:40}}
                    />
                    <View style={{marginLeft: ms(25), alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={[styles.subtitle, {fontSize: vs(19), marginTop: 1}]}>Já tem uma conta? 
                            <Button label=' faça login' onPress={()=> navigation.navigate('login-user')} 
                            labelSize={{fontSize: vs(18)}} colorText={{color: colors.darkBlue_500}}/>
                        </Text>
                    </View>
                </View>
         </LinearGradient>
    )
}



