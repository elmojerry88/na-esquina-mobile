import React from "react";
import { TouchableOpacity, Text, View, Alert, ViewProps } from "react-native"
import { SmallText } from "../text/SmallText"

interface ButtonProps {
    label: string;
    labelSize?: {fontSize: number};
    style?: ViewProps['style'];
    onPress: () => void; 
}

export const Button: React.FC<ButtonProps> = ({label, labelSize, style, onPress, ...props}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress} >
            <SmallText label={label} labelSize={labelSize}/>
       </TouchableOpacity>
    )
}
 
  
  

