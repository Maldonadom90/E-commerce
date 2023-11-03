import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 40,
    marginBottom: 10,
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  cameraButton: {
    backgroundColor: colors.tertiary,
    height: 50,
    width: 200,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    color: colors.primary,
    fontSize: 18,
  },
  deleteSession: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: 250,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.fifth,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  text2: {
    fontSize: 18,
  },
});
