import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quaternary,
  },
  listContainer: {
    flex: 4,
    margin: 15,
    backgroundColor: colors.tertiary,
  },
  buttonContainer: {
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    margin: 20,
    flex: 1,
  },
  confirm: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
});
