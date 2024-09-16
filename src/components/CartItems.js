import { StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../global/colors';

const CartItems = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
      <Image
            style={styles.img}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
      />
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{item.description}</Text>
        <Text style={styles.text4}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text3}>${item.price}</Text>
      </View>
      <FontAwesome style={styles.icon} name="trash-o" size={24} color="black" />
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 15,
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    shadowOpacity: 0.25,
    shadowRadius: 3.0,
    elevation: 5,
    position:'relative'
  },
containerText:{
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
  }, 
img:{
    width: 90,
    height: 80,
},
icon:{
  position:'absolute',
  top:10,
  right:10
},  
  text1:{
    color:"black",
    fontFamily:"Lexend",
    fontSize:18,
    margin:5,
  },
  text2:{
    color:"black",
    fontFamily:"Lexend",
    fontSize:15,
    margin:5,
  },
  text3:{
    color:"black",
    fontFamily:"Lexend",
    fontSize:18,
    margin:5,
  },
  text4:{
    color:"black",
    fontFamily:"Lexend",
    fontSize:16,
    margin:5,
  }
})