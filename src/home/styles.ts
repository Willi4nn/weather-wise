import { StyleSheet } from 'react-native';
import { THEME } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  centerContainer: {
    flex: 1,
    paddingTop: 200,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  feedbackText: {
    marginTop: 12,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY_500,
  },
  errorText: {
    color: THEME.COLORS.RED,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlign: 'center',
    lineHeight: 24,
  },
});
