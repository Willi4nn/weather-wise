import { StyleSheet } from 'react-native';
import { THEME } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 32,
  },
  circle: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 180,
    height: 150,
    width: 150,
    opacity: 0.5,
    borderRadius: 100,
    backgroundColor: THEME.COLORS.WHITE,
  },
});
