import { FlatList, View } from 'react-native';

import { CategoryItem } from './components';
import { Header } from '../../Components';
import React from 'react';
import dataCategories from '../../data/dataCategory';
import styles from './Home.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={'Categories'} />
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
