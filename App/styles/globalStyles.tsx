import { StyleSheet } from 'react-native';
import { ms, vs } from './Responsive';
import { Colors } from './Colors';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: "Kavoon_400Regular",
        fontSize: ms(50),
        color: Colors.DarknessBlue,
        marginLeft: 25,
    },
    subtitle: {
        fontFamily: 'Kavoon_400Regular',
        fontSize: 30,
        color: Colors.White,
    },
    text3: {
        fontFamily: "Kavoon_400Regular",
        color: Colors.White,
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
        color: Colors.White,
     
    },
    BigText: {
        fontSize: 15,
        fontFamily: 'Kavoon_400Regular',
        color: 'white',
    }

});