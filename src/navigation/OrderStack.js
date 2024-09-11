import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Order from '../screens/Order';



const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
                    screenOptions={(
                        ()=> {
                            return{
                                header:() => <Header title="Tus pedidos"/>
                            }
                        }
                    )}>
                    
        
        <Stack.Screen name='Order' component={Order}/>
    </Stack.Navigator>


    
    
  )
}

export default OrderStack

const styles = StyleSheet.create({})