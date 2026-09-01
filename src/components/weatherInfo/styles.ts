import { Platform, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingTop: 10,
  },
  mainCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 16,
      },
      android: {
        elevation: 2,
        backgroundColor: '#FFFFFF',
      },
      web: {
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
      },
    }),
  },
  weatherIcon: {
    width: 90,
    height: 90,
    marginBottom: -5,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  temperature: {
    color: THEME.COLORS.GRAY_500,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 64,
    lineHeight: 70,
  },
  tempUnit: {
    color: THEME.COLORS.PURPLE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 22,
    marginTop: 4,
    marginLeft: 2,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  name: {
    color: THEME.COLORS.GRAY_500,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 18,
    marginRight: 4,
  },
  cityIcon: {
    color: THEME.COLORS.PURPLE,
  },
  description: {
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  minMaxRow: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  minMaxText: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY_500,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardInfo: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '48%',
    height: 90,
    backgroundColor:
      Platform.OS === 'android' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 1,
      },
      web: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)',
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardValue: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY_500,
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 12,
    color: THEME.COLORS.GRAY_400,
  },
});
