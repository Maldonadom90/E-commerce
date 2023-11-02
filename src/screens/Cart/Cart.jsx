import { FlatList, Pressable, Text, View } from 'react-native';
import React from 'react';
import { clearCart } from '../../features/cart/cartSlice';

import CartItem from './components/CartItem';
import styles from './Cart.styles';
import { usePostOrderMutation } from '../../services/shopApi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [triggerPost, result] = usePostOrderMutation();
  const dispatch = useDispatch();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({ total, cart, user: 'LoggedUser' });
    dispatch(clearCart());
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.total}>
          <Text style={styles.totalText}>{`Total : $ ${total}`}</Text>
        </View>
        <Pressable onPress={confirmCart} style={styles.confirm}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
