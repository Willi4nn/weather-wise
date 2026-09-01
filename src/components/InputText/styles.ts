import { Platform, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:
      Platform.OS === 'android' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
      },
    }),
  },
  input: {
    flex: 1,
    height: '100%',
    paddingLeft: 34,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY_500,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      } as any,
    }),
  },
  icon: {
    position: 'absolute',
    left: 14,
    color: THEME.COLORS.PURPLE,
  },
});
