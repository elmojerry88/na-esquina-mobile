import { TouchableOpacity, Text, View, Alert } from "react-native"
import { SmallText } from "../text/SmallText"




export const Button = ({label, style, onPress,}) => {

    return (
        <TouchableOpacity style={style} onPress={onPress} >
            <SmallText label={label}/>
       </TouchableOpacity>
    )
}
 
  
  

