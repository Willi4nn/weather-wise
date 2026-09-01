import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputText from '../../components/InputText';
import WeatherInfo from '../../components/WeatherInfo';
import { useWeather } from '../../hooks/useWeather';
import { THEME } from '../../theme';
import { styles } from './styles';

const DEFAULT_CITY = 'Patos de Minas';

export default function Home() {
  const { weather, isLoading, error, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputText onSearch={fetchWeather} isLoading={isLoading} />

        {isLoading && !weather && (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color={THEME.COLORS.PURPLE} />
            <Text style={styles.feedbackText}>Buscando dados...</Text>
          </View>
        )}

        {error && !isLoading && (
          <View style={styles.centerContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {weather && <WeatherInfo data={weather} isLoading={isLoading} />}
      </View>
    </SafeAreaView>
  );
}
