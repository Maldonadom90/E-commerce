import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import { Header, SearchInput } from '../../Components';
import React, { useEffect, useState } from 'react';

import allProducts from '../../data/products';
import styles from './Products.style';
import AntDesign from '@expo/vector-icons/AntDesign';

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="closecircleo" size={35} color={'black'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Products;
