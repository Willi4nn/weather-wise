import { Platform, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 36,
    paddingTop: 4,
  },
  mainCard: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 2,
    gap: 6,
  },
  name: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 17,
    letterSpacing: 0.4,
  },
  weatherIcon: {
    width: 110,
    height: 110,
    marginVertical: -4,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  temperature: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 76,
    lineHeight: 82,
  },
  tempUnit: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 24,
    marginTop: 8,
    marginLeft: 2,
  },
  description: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 0.2,
  },
  minMaxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    gap: 12,
  },
  minMaxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dividerVertical: {
    width: 1,
    height: 12,
  },
  minMaxText: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  cardInfo: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '48.5%',
    height: 88,
    backgroundColor:
      Platform.OS === 'android' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.72)',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.85)',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)',
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: '100%',
  },
  cardValue: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: '#0F172A',
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 12,
    color: '#64748B',
  },
});
