import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  orderContainer: {
    marginTop: 20,
    backgroundColor: colors.primary,
    width: 350,
    height: 100,
    borderWidth: 2,
    borderColor: colors.fifth,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
