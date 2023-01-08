import { View, Text, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { WeatherData } from '../../models/WeatherData';

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.circle} />
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
      />
      <View style={styles.header}>
        <Text style={styles.temperature}>{temp}º</Text>
        <View style={styles.location}>
          <Text style={styles.name}>{name} </Text>
          <Icon name="compass" size={32} style={styles.cityIcon} />
        </View>
        <Text style={styles.description}>{description} </Text>
        <View style={styles.cards}>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/visibility.png')} />
            <Text>{visibility} m</Text>
            <Text style={styles.title}>Visibilidade</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/thermometer.png')} />
            <Text>{feels_like}º</Text>
            <Text style={styles.title}>Sensação térmica</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/wind.png')} />
            <Text>{speed} m/s</Text>
            <Text style={styles.title}>Velocidade do vento</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/humidity.png')} />
            <Text>{humidity} %</Text>
            <Text style={styles.title}>Umidade</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/sunrise.png')} />
            <Text>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
            <Text style={styles.title}>Nascer do sol</Text>
          </View>
          <View style={styles.cardInfo}>
            <Image source={require('../../assets/sunset.png')} />
            <Text>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
            <Text style={styles.title}>Pôr do sol</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
