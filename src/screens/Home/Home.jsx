import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
} from 'react-native';

import { CategoryItem } from './components';
import { Header } from '../../components';
import React from 'react';
import styles from './Home.styles';
import { useGetCategoriesQuery } from '../../services/shopApi';

const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery();
  const logoUrl =
    'https://res.cloudinary.com/dfnz48rpd/image/upload/v1699239265/FeriaLogo_vbaxdk.png';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <Header title={'FeriApp'} />
      </View>
      <Image source={{ uri: logoUrl }} style={styles.logo} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          ¡Bienvenido a tu tienda de moda sostenible!
        </Text>
      </View>
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={data}
            numColumns={3}
            keyExtractor={(category) => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
