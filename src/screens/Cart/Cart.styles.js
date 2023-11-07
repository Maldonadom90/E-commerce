import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    flex: 4,
    margin: 15,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.fifth,
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  buttonContainer: {
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderWidth: 1,
    margin: 20,
    flex: 1,
  },
  total: {},
  totalText: {
    fontSize: 30,
  },
  confirm: {
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 10,
  },
  confirmText: {
    color: colors.primary,
    fontSize: 20,
  },
});
