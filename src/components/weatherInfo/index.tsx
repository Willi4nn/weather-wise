import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import humidityImg from '../../assets/humidity.png';
import sunriseImg from '../../assets/sunrise.png';
import sunsetImg from '../../assets/sunset.png';
import thermometerImg from '../../assets/thermometer.png';
import visibilityImg from '../../assets/visibility.png';
import windImg from '../../assets/wind.png';
import formatTime from '../../libs/format-time';
import formatVisibility from '../../libs/format-visibility';
import { WeatherData } from '../../models/weatherData';
import { styles } from './styles';
import WeatherCard from './WeatherCard';

interface WeatherInfoProps {
  weatherData: WeatherData;
}

export default function WeatherInfo({ weatherData }: WeatherInfoProps) {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  const roundedTemp = Math.round(temp);
  const roundedFeelsLike = Math.round(feels_like);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.circle} />
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
      />
      <View style={styles.header}>
        <Text style={styles.temperature}> {roundedTemp}º</Text>
        <View style={styles.location}>
          <Text style={styles.name}>{name}</Text>
          <Icon name="compass" size={28} style={styles.cityIcon} />
        </View>

        <Text style={styles.description}>
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </Text>

        <View style={styles.cards}>
          <WeatherCard
            image={visibilityImg}
            value={formatVisibility(visibility)}
            title="Visibilidade"
          />
          <WeatherCard
            image={thermometerImg}
            value={`${roundedFeelsLike}°`}
            title="Sensação térmica"
          />
          <WeatherCard
            image={windImg}
            value={`${speed} m/s`}
            title="Velocidade do vento"
          />
          <WeatherCard
            image={humidityImg}
            value={`${humidity}%`}
            title="Umidade"
          />
          <WeatherCard
            image={sunriseImg}
            value={formatTime(sunrise)}
            title="Nascer do sol"
          />
          <WeatherCard
            image={sunsetImg}
            value={formatTime(sunset)}
            title="Pôr do sol"
          />
        </View>
      </View>
    </ScrollView>
  );
}

