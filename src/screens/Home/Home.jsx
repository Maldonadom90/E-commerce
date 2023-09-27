import { FlatList, View } from 'react-native';

import { CategoryItem } from './components';
import { Header } from '../../components';
import React from 'react';
import dataCategories from '../../data/dataCategories';
import styles from './Home.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={'Categorías'} />
        <View style={styles.listContainer}>
          <FlatList
            data={dataCategories}
            keyExtractor={(category) => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
