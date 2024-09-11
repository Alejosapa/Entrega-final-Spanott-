import { StyleSheet, Text, View } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'

const ItemCategories = () => {
  return (
    <View>
      <Header title={"Categorias"}/>
    <Categories />
    </View>
  )
}

export default ItemCategories

const styles = StyleSheet.create({})