import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    paddingHorizontal: 3,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 30,
  },
  productContainer: {
    width: 150,
    height: 260,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    borderRadius: 35,
    position: 'absolute',
    top: -15,
    width: 160,
    height: 170,
  },
  title: {
    position: 'absolute',
    width: 150,
    bottom: 65,
    paddingStart: 12,
    fontSize: 14,
    color: 'white',
    textTransform: 'uppercase',
  },
  price: {
    position: 'absolute',
    bottom: 10,
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    paddingStart: 20,
    paddingTop: 5,
    fontSize: 20,
    color: 'white',
  },
});
