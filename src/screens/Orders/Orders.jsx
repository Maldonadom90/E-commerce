import { Text, View } from 'react-native';

import React from 'react';
import styles from './Orders.styles';
import { Header } from '../../components';

const Orders = () => {
  return (
    <View styles={styles.container}>
      <Header title={'Órdenes'} />
      <View style={styles.orders}>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
      </View>
    </View>
  );
};

export default Orders;
