import { Pressable, StyleSheet, Text, View, Image} from 'react-native'
import productos from '../data/productos.json'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({productos}) => {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Detail",{id:productos.id})}>
        <Image
            style={styles.img}
            resizeMode='cover'
            source={{uri:productos.thumbnail}}
        />
            <Text style={styles.text}>{productos.title}</Text>
            <Text style={styles.text}>${productos.price}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: 'white',
        marginVertical: 10,
        padding: "5%",
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        shadowOpacity: 0.25,
        shadowRadius: 3.0,
        elevation: 5,
        
      },
    text:{
        flex:2,
        textAlign:"center",
        color:"black",
        fontFamily:"Lexend",
        fontSize:16,
        
      }, 
    img:{
        flex:1,
        width: 90,
        height: 80,
        marginRight: 10,
    }
})