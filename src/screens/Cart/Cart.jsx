import { FlatList, Pressable, Text, View } from 'react-native';

import CartItem from './components/CartItem';
import React from 'react';
import dataCart from '../../data/dataCart';
import styles from './Cart.styles';
import { Header } from '../../components';

const Cart = () => {
  const renderItem = () => <CartItem />;

  return (
    <View style={styles.container}>
      <Header title={'Carrito'} />
      <View style={styles.listContainer}>
        <FlatList
          data={dataCart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Text>{`Total $(del carrito)`}</Text>
        </View>
        <Pressable>
          <Text style={styles.confirm}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
