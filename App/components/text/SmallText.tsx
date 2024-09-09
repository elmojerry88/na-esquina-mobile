import React from "react";
import { Text } from "react-native"
import { styles } from "@/styles/globalStyles";

interface SmallTextProps{
  label: string;
  labelSize?: {fontSize: number};
  colorText?: {color: string};
}

export const SmallText: React.FC<SmallTextProps> = ({label , labelSize, colorText}) => {  
  return (
        <Text style={[styles.smallText, labelSize, colorText]}> {label} </Text>
    )
}
