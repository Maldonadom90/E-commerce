import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import styles from './Details.style';
import Modal from 'react-native-modal';

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    setModalVisible(true);
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    showAlert('¡Producto agregado al carrito!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailContainer}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: product.images[0] }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
        <Pressable onPress={handleAddToCart} style={styles.buttons}>
          <AntDesign name="shoppingcart" size={30} color={'white'} />
        </Pressable>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>{alertMessage}</Text>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Details;
