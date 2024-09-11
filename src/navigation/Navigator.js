import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from '../navigation/ShopStack'
import CartStack from './CartStack';
import OrderStack from './OrderStack';
import { colors } from '../global/colors';
import TabBarIcon from '../components/TabBarIcon';
import ItemCategories from '../screens/ItemCategories';

const Tab = createBottomTabNavigator();

const Navigator = () => {
return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle:styles.tabBar
                }}
            >
                <Tab.Screen 
                    name='HomeStack' 
                    component={ShopStack}
                    options={{
                        tabBarIcon:({focused}) => {
                            return<TabBarIcon focused={focused} text="Inicio" icon="home"/>
                        }
                    }}
                />
                <Tab.Screen 
                    name='Categorias' 
                    component={ItemCategories}
                    options={{
                        tabBarIcon:({focused}) => {
                            return<TabBarIcon focused={focused} text="Categorias" icon="menufold"/>
                        }
                    }}
                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrderStack}
                    options={{
                        tabBarIcon:({focused}) => {
                            return<TabBarIcon focused={focused} text="Ordenes" icon="tago"/>
                        }
                    }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon:({focused}) => {
                            return<TabBarIcon focused={focused} text="Carrito" icon="shoppingcart"/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
)}

export default Navigator
const styles= StyleSheet.create({
    tabBar:{
        backgroundColor:colors.principal,
        position:"absolute",
        left:30,
        right:30,
        height:60,
        borderTopEndRadius:20,
        borderTopStartRadius:20,
    }
})