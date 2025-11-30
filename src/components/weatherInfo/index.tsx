import {
  Image,
  KeyboardAvoidingView,
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
import { WeatherData } from '../../models/weatherData';
import { styles } from './styles';

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
  const roundedTime = Math.round(temp);
  return (
    <KeyboardAvoidingView>
      <View style={styles.circle} />
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
      />
      <View style={styles.header}>
        <Text style={styles.temperature}> {roundedTime}º</Text>
        <View style={styles.location}>
          <Text style={styles.name}>{name} </Text>
          <Icon name="compass" size={32} style={styles.cityIcon} />
        </View>
        <Text style={styles.description}>{description} </Text>
        <View style={styles.cards}>
          <View style={styles.cardInfo}>
            <Image source={visibilityImg} />
            <Text>{visibility} m</Text>
            <Text style={styles.title}>Visibilidade</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={thermometerImg} />
            <Text>{feels_like}º</Text>
            <Text style={styles.title}>Sensação térmica</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={windImg} />
            <Text>{speed} m/s</Text>
            <Text style={styles.title}>Velocidade do vento</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={humidityImg} />
            <Text>{humidity} %</Text>
            <Text style={styles.title}>Umidade</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={sunriseImg} />
            <Text>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
            <Text style={styles.title}>Nascer do sol</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={sunsetImg} />
            <Text>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
            <Text style={styles.title}>Pôr do sol</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
