import { StyleSheet } from 'react-native';
import { ms, vs } from './Responsive';
import { colors } from './Colors';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: "Kavoon_400Regular",
        fontSize: ms(50),
        color: colors.darkBlue_500,
        marginLeft: 25,
    },
    subtitle: {
        fontFamily: 'Kavoon_400Regular',
        fontSize: 30,
        color: colors.white,
    },
    text3: {
        fontFamily: "Kavoon_400Regular",
        color: colors.white,
    },

    fundo: {
        resizeMode: 'contain',
        height: ms(250),
        width: ms(300),
        alignItems: 'center',
    },
    yacht: {
        resizeMode: 'contain',
        height: ms(100, 10),
        width: ms(200, 1.9),
        marginTop: vs(40),
    },
    smallText: {
        fontSize: 20,
        fontFamily: 'Kavoon_400Regular',
        color: colors.white,
     
    },
    BigText: {
        fontSize: 15,
        fontFamily: 'Kavoon_400Regular',
        color: colors.white,
    },
    box: {
        width: vs(285),
        height: vs(220),
        borderRadius: 40,
        backgroundColor: colors.whiteBlue_200,
        marginLeft: vs(15),
        marginRight: vs(15),
        marginTop: vs(5),
    },

});