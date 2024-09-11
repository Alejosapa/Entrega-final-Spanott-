import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import productos from '../data/productos.json';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';

const ItemListCategories = ({ route }) => {
  const {category} = route.params
  const [productosFiltered, setProductosFiltered] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = productos.filter((producto) => producto.category === category);
    setProductosFiltered(filteredProducts);
    setOriginalProducts(filteredProducts);
  }, [category]);

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