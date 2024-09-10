import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import Header from '../components/Header'
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
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:0,
  },
  img:{
    width:"100%",
    height:"50%",
    marginTop:0,
    marginBottom:10,
  },
  containerText:{
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:20,
    margin:10
  },
  description:{
    fontSize:15,
    margin:10,
  },
  cart:{
    borderWidth:1,
    borderRadius:25,
    borderColor:colors.principal,
    width:"60%",
    height:"10%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    position:"absolute",
    bottom:20,
    left:"20%",
    backgroundColor:colors.principal,
    transform: " translateX: -'50%'" , 
  },
  button:{},
  price:{
    fontSize:20,
    marginHorizontal:25,
  color:"white"
  },
})