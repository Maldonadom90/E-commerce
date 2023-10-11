import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginVertical: 15,
    height: 80,
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
