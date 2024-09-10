import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import AntDesignn from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

const Search = ({onSearch}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const handleInputChange = (t) =>{
        setInput(t)
    }

    const handleRemoveInput = () =>{
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () =>{
        const regex = /[^a-zA-Z0-9]/
        if(regex.test(input)){
            setError("introduzca un nombre valido")
        }else{
            setError("")
            onSearch(input)
        }

        onSearch(input)
    }

    return (
    <View style={styles.container}>
            <View style={styles.containerSerch}>
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={24} color="black"  />
                </Pressable>
                    <TextInput style={styles.input}
                        placeholder='Buscar'
                        placeholderTextColor={"black"}
                        value={input}
                        onChangeText={handleInputChange}
                    />
                <Pressable onPress={handleRemoveInput}>
                    <AntDesignn name="closecircleo" size={24} color="black" />
                </Pressable>
            </View>
        <Text style={styles.textError}>{error}</Text>
    </View>
)
}

export default Search

const styles = StyleSheet.create({
    containerSerch:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"5%",
    },
    input:{
        flex:1,
        backgroundColor: "white",
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"black",
        borderRadius:25,
        marginHorizontal:8,
    },
    textError:{
        color:"red",
        fontWeight:"bold",
        marginHorizontal:60,
        marginVertical:0,
        
    }
})