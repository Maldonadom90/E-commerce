import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.tertiary,
    position: 'relative',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: 100,
  },
  descriptionContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 450,
  },
  descriptionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'transparent',
    textShadowOffset: { width: 0, height: 3 },
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowRadius: 3,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
});
