import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    width: 110,
    height: 50,
    marginHorizontal: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'solid',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Croissant',
    textTransform: 'uppercase',
    color: colors.primary,
  },
});
