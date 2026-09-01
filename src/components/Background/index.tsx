import { LinearGradient } from 'expo-linear-gradient';
import { getWeatherGradient } from '../../utils/getWeatherGradient';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  iconCode?: string;
}

export function Background({ children, iconCode }: Props) {
  const theme = getWeatherGradient(iconCode);

  return (
    <LinearGradient
      colors={theme.colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}
