import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../services/shop';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';

const ItemListCategories = ({ route }) => {
    // Obtener la categoría de los parámetros de la ruta
    const { category } = route.params;

    // Pasar la categoría a la consulta
    const { data: productos, isSuccess, isLoading, error } = useGetProductsQuery(category);

    const [productosFiltered, setProductosFiltered] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        if (isSuccess && productos) {
            setProductosFiltered(productos);
            setOriginalProducts(productos);
        }
    }, [productos, isSuccess]);

    const onSearch = (input) => {
        if (input === "") {
            setProductosFiltered(originalProducts);
        } else {
            setProductosFiltered(
                originalProducts.filter((producto) =>
                    producto.title.toLowerCase().includes(input.toLowerCase())
                )
            );
        }
    };

    if (isLoading) {
        return <Text>Cargando...</Text>;
    }

    if (error) {
        return <Text>Error no se pudieron cargar los productos</Text>;
    }

  return (
    <View>
      <Search onSearch={onSearch} />
      <FlatList
        data={productosFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<ProductItem productos={item}/>)}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});