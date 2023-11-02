import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 8,
    borderRadius: 10,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  name: {
    fontSize: 18,
  },
  imageContainer: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    margin: 10,
    width: 70,
    height: 70,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  trash: {
    position: 'absolute',
    right: 15,
    top: 25,
  },
});
