import { Pressable, StyleSheet, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Category = ({item}) => {

const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("Products",{category:item})}>
        <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({
  container:{
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:"white",
    marginVertical:10,
    padding:25,
    justifyContent:"top",
    alignItems:"left",
    borderWidth: 1,
    borderColor:"gray",
    borderRadius:15,
    shadowOpacity: 0.25,
    shadowRadius: 3.00,
    elevation: 5,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:16,
    fontFamily:"Lexend"
  }
})