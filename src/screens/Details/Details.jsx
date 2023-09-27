import { Image, Text, View, Pressable } from 'react-native';

import { Header } from '../../components';
import React from 'react';
import styles from './Details.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import Counter from '../../components/Counter';

const Details = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Header title={'Detalle'} />
      <View>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
        <Counter />
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="doubleleft" size={25} color={'black'} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={25} color={'black'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Details;
