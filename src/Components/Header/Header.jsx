import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './Header.style';

const Header = ({ title, logo }) => {
  return (
    <View style={styles.container}>
      {logo && (
        <Image
          source={{
            uri: logo,
          }}
          style={styles.logo}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
