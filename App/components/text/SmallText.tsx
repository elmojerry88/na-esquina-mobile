import React from "react";
import { Text } from "react-native"
import { styles } from "@/styles/globalStyles";

interface SmallTextProps{
  label: string;
  labelSize?: {fontSize: number};
}

export const SmallText: React.FC<SmallTextProps> = ({label , labelSize}) => {  
  return (
        <Text style={[styles.smallText, labelSize]}> {label} </Text>
    )
}
