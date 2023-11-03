import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    marginVertical: 20,
    width: '100%',
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    fontFamily: 'Croissant',
    textTransform: 'uppercase',
  },
});
