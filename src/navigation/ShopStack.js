import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail';
import ItemCategories from '../screens/ItemCategories';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
                    screenOptions={(
                        ({route})=> {
                            return{
                                header:() => <Header title={
                                    route.name === "Home" ? "Home" : 
                                    route.name === "productos" ?
                                    route.params.category :
                                    "Detalle del producto"
                                }/>
                            }
                        }
                    )}>
                    
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Category' component={ItemCategories}/>
        <Stack.Screen name='Detail' component={ItemDetail}/>
        <Stack.Screen name='Products' component={ItemListCategories}/>
    </Stack.Navigator>


    
    
  )
}

export default ShopStack

const styles = StyleSheet.create({})