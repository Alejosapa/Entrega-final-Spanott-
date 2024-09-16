import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import productos from '../data/productos.json'
import { colors } from '../global/colors'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const ItemDetail = ({route}) => {

  const {id} = route.params
  const dispatch = useDispatch()
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode='contain'
          source={{uri:productos[id].thumbnail}}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{productos[id].title}</Text>
          <Text style={styles.description}>{productos[id].description}</Text>
        </View>
    </View>
        <View style={styles.containerCart}>
          <View style={styles.cart}>
            <Pressable style={styles.button}>
              <Text style={styles.price}>-</Text>
            </Pressable>
              <Text style={styles.price}>${productos[id].price}</Text>
            <Pressable style={styles.button} onPress={()=> dispatch(addItemCart({...productos[id],quantity:1}))}>
              <Text style={styles.price}>+</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    padding:"2%",
    margin:"5%",
    width:"90%",
    alignItems:"center",
    backgroundColor:colors.principal,
    borderRadius:45
  },
  img:{
    width:"70%",
    height:"70%",
    margin:0
  },
  containerText:{
    backgroundColor:colors.secundario,
    margin:10,
    padding:10,
    borderRadius:20
  },
  containerCart: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.principal,
    backgroundColor: colors.principal,
    position: 'absolute',
    bottom: 1,
    right: '20%',
    left: '20%',
    padding: 5,
    
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderRadius: 25,
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color:"white",
    fontSize:20,
    fontFamily:"Fjalla",
    fontWeight: 'bold',
  },
  description: {
    color:"white",
    fontSize:16,
    fontFamily:"Fjalla",
  },
  button: {
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor:colors.secundario,
    marginHorizontal:10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal:6,
    color:"white"
  },
});
