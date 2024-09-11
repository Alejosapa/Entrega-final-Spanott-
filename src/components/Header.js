import { Pressable, StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { colors } from '../global/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({title}) => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable style={styles.icon}>
          <Ionicons name="arrow-back-circle" size={24} color="white" />
        </Pressable>
        <Text style={styles.text}>Morfi Burger </Text>
        <Text style={styles.textScreen}>{title}</Text>
      </View>
    </View>
  )
}
export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.principal,
        width:"100%",
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
        padding:8,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:"column",
        marginBottom:0,
    },
    text:{
      fontSize:32,
      color:"white",
      fontFamily:"Fjalla"
    },
    textScreen:{
      fontSize:20,
      color:"white",
      fontFamily:"Fjalla"
    },
    icon:{
      position:"absolute",
      left:8
    }
})