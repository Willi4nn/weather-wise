import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    maxWidth: isDesktop ? 884 : '100%',
    alignSelf: 'center',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 35,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY_500,
  },
  icon: {
    position: 'absolute',
    left: 12,
    color: THEME.COLORS.PURPLE,
  },
});
