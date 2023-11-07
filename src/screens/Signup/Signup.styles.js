import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  loginContainer: {
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: colors.primary,
    fontSize: 23,
  },
  inputEmail: {
    width: '95%',
    backgroundColor: colors.primary,
    height: 40,
    marginVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingStart: 20,
    color: 'black',
  },
  loginButton: {
    backgroundColor: colors.tertiary,
    width: '50%',
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    width: '95%',
  },
});
