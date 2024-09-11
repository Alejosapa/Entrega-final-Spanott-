import { StyleSheet, Text, View, FlatList} from 'react-native'
import cart from '../data/cart.json'
import CartItems from '../components/CartItems'
import { colors } from '../global/colors'


const Cart = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Comprar</Text>
          <Text style={styles.text}>Total</Text>
        </View>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItems item={item}/>}
        />
        
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  
  containerText:{
    backgroundColor:"white",
    width:"80%",
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:"10%",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor:colors.principal,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
})