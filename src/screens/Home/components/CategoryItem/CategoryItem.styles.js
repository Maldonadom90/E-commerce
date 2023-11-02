import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginVertical: 20,
    width: '100%',
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    fontFamily: 'Croissant',
  },
});
