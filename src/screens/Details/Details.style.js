import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tertiary,
    width: '100%',
  },
  detailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: 350,
  },
  title: {
    borderBottomWidth: 2,
    borderBottomColor: colors.fifth,
    fontSize: 25,
    fontFamily: 'Croissant',
  },
  description: {
    width: 350,
    height: 70,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
    backgroundColor: colors.tertiary,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  modalContent: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    width: 300,
    height: 200,
  },
  closeButton: {
    backgroundColor: colors.tertiary,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: colors.primary,
    fontSize: 18,
  },
});
