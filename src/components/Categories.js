import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../data/categories.json'
import Category from '../components/Category'

const Categories = ({navigation}) => {

  return (
    <>
            <FlatList
                data={categories}
                keyExtractor={item=>item}
                renderItem={({item})=> <Category  item={item}/>}
            />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})