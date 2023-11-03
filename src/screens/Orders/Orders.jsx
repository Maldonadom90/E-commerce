import { FlatList, Text, View } from 'react-native';
import { Header } from '../../components';

import React from 'react';
import styles from './Orders.styles';
import { useGetOrdersQuery } from '../../services/shopApi';

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery();

  return (
    <View style={styles.container}>
      <Header title={'Ordenes'} />
      {!isLoading && (
        <FlatList
          data={Object.values(data)}
          renderItem={({ item }) => (
            <View style={styles.orderContainer} key={item.id}>
              <Text style={styles.header}>Orden de compra del día:</Text>
              <Text style={styles.text}>{item.date}</Text>
              <Text style={styles.text}>Total: ${item.total}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Orders;
