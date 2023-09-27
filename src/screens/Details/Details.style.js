import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: colors.tertiary,
  },
  imageContainer: {
    height: '70%',
    width: '100%',
  },
  image: {
    height: '50%',
    marginTop: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
    fontFamily: 'Croissant',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});
