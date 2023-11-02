import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 80,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Croissant',
    color: 'black',
  },
});
