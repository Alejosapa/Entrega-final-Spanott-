import { StyleSheet, Text, View } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign';



const TabBarIcon = ({text, icon, focused}) => {
  return (
    <View style={styles.container}>
        <AntDesign 
        style={styles.icon} 
        name={icon}  
        size={focused ? 30 : 24}
        color={"white"}
        />
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        
    },
    icon:{
        
    },
    text:{
        color:"white"
    }
})