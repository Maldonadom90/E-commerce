import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fifth,
  },
  loginContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputEmail: {
    width: '95%',
    backgroundColor: colors.primary,
    height: 30,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 20,
    borderRadius: 10,
    color: 'black',
  },
  loginButton: {
    backgroundColor: colors.tertiary,
    width: '50%',
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: colors.primary,
    fontSize: 24,
  },
});
