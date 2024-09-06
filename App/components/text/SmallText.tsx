import { Text } from "react-native"
import { styles } from "@/styles/globalStyles";


export const SmallText = ({label , ...props}) => {
    
  return (
        <Text style={styles.smallText}> {label} </Text>
    )
}
