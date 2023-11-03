import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    height: 80,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Croissant',
    color: 'black',
    textTransform: 'uppercase',
  },
});
