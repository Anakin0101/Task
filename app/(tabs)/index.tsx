import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import useGenerateRandomColor from '@/hooks/useGenerateRandomColor';
import ButtonComponent from '@/components/Button/ButtonComponent';

export default function TabOneScreen() {

  const {randomColor,handleGenerateColor} = useGenerateRandomColor()
  return (
    <View style={[styles.container,{backgroundColor:randomColor}]}>
       <ButtonComponent title="Hello there" onPress={handleGenerateColor}/>
       <View>
        <Text>random color is : {randomColor}</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
