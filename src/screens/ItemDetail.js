import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import productos from '../data/productos.json'
import { colors } from '../global/colors'

const ItemDetail = ({route}) => {

  const {id} = route.params

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

          <View style={styles.cart}>
            <Pressable style={styles.button}>
              <Text style={styles.price}>-</Text>
            </Pressable>
              <Text style={styles.price}>${productos[id].price}</Text>
            <Pressable style={styles.button}>
              <Text style={styles.price}>+</Text>
            </Pressable>
          </View>

      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  
})