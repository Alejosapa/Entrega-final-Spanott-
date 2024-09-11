import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useAnimatedValue, View} from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { colors } from './src/global/colors';
import Navigator from './src/navigation/Navigator';


export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){
    return null
  }

  return (
    <>
      <Navigator/>
      <StatusBar style="light" backgroundColor={colors.secundario}/>
    </>
  );
}

const styles = StyleSheet.create({})


