import { StyleSheet, View } from "react-native";
import { ViewContainerProps } from "./types";

const styles = StyleSheet.create({
    container: {
        flex: 3,
        
    }

})



const ViewContainer = ({ children }: ViewContainerProps) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}





export default ViewContainer;