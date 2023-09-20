import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 20,
    backgroundColor: colors.tertiary,
    width: 300,
    paddingTop: 20,
    paddingStart: 40,
    borderColor: colors.secondary,
    borderWidth: 10,
    borderRadius: 20,
  },
});
