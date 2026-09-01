import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import InputText from '../../components/InputText';
import WeatherInfo from '../../components/WeatherInfo';
import { useWeather } from '../../hooks/useWeather';
import { styles } from './styles';

const DEFAULT_CITY = 'Patos de Minas';

export default function Home() {
  const { weather, isLoading, error, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  return (
    <Background iconCode={weather?.iconCode}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <InputText onSearch={fetchWeather} isLoading={isLoading} />

          {isLoading && !weather && (
            <View style={styles.centerContainer}>
              <View>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text style={styles.feedbackText}>
                  Buscando dados meteorológicos...
                </Text>
              </View>
            </View>
          )}

          {error && !isLoading && (
            <View style={styles.centerContainer}>
              <View>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            </View>
          )}

          {weather && <WeatherInfo data={weather} isLoading={isLoading} />}
        </View>
      </SafeAreaView>
    </Background>
  );
}
