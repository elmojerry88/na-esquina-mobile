import { StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: 'Kavoon_400Regular',
    }
})

const BigText = (text: string, style)=>{
    return (
        <Text style={style}> {text} </Text>
    )
}

export default BigText;