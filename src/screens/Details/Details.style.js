import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: colors.primary,
    position: 'relative',
  },
  imageContainer: {
    height: '70%',
    width: '100%',
  },
  image: {
    height: 350,
    marginTop: 1,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    bottom: 280,
    left: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.fifth,
    fontSize: 25,
    fontFamily: 'Croissant',
  },
  description: {
    width: 350,
    position: 'absolute',
    bottom: 220,
    fontSize: 18,
  },
  price: {
    position: 'absolute',
    bottom: 270,
    right: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttons: {
    position: 'absolute',
    bottom: 120,
    right: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    backgroundColor: colors.tertiary,
    borderRadius: 5,
    padding: 5,
  },
});
