import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  header: { alignItems: 'center' },
  circle: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 70,
    height: 150,
    width: 150,
    opacity: 0.5,
    borderRadius: 100,
    backgroundColor: THEME.COLORS.WHITE,
  },
  weatherIcon: {
    position: 'absolute',
    paddingLeft: 200,
    paddingTop: 150,
  },
  temperature: {
    paddingTop: 125,
    color: THEME.COLORS.GRAY_500,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.ELG,
    paddingBottom: 70,
  },
  name: {
    color: THEME.COLORS.PURPLE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    paddingBottom: 20,
  },
  description: {
    color: THEME.COLORS.PURPLE,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG,
    paddingBottom: 10,
  },
  location: {
    flexDirection: 'row',
  },
  cityIcon: {
    color: THEME.COLORS.PURPLE,
  },
  cards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '42%',
    height: 110,
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 20,
    elevation: 20,
    shadowColor: THEME.COLORS.PURPLE,
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
