import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <LinearGradient
      colors={['#A8C0FF', '#C2E9FB', '#FFE5E5'] as const}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}