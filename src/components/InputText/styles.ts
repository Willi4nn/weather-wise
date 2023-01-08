import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    flex: 1,
    height: 50,
    borderRadius: 10,
    paddingLeft: 40,
    padding: 10,
    backgroundColor: 'white',
  },
  icon: { position: 'absolute', left: 10, top: 15 },
});
