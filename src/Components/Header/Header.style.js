import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 400,
    height: 80,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.fifth,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Croissant',
    color: 'black',
    textTransform: 'uppercase',
  },
});
