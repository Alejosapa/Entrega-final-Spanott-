import { StyleSheet, Text, View } from 'react-native'

const OrderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{new Date(item.createdAt).toLocaleString()}</Text>
      <Text style={styles.text}>Total: ${item.total}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:"white",
        marginVertical:10,
        padding:25,
        justifyContent:"center",
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