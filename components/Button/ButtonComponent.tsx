import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet,Text,TouchableOpacity,ViewStyle,TextStyle } from 'react-native';
import { ButtonComponentProps } from './ButtonComponent.types';


const ButtonComponent: React.FC<ButtonComponentProps>= ({title, onPress})  => {
    return (
<TouchableOpacity  style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
      paddingVertical: 20,
      paddingHorizontal: 50,
      backgroundColor: Colors.light.background,
      borderRadius: 11,
      shadowColor: Colors.dark.background,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 5,
      transform: [{ translateY: -5 }, { translateZ: 5 }],
    } as ViewStyle,
    buttonText: {
      fontSize: 36,
      fontWeight: '700',
      fontFamily: 'Segoe UI',
      color: 'black',
    } as TextStyle,
  });
  export default ButtonComponent;
