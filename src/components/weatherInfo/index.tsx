import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Weather } from '../../domain/models/Weather';
import { THEME } from '../../theme';
import WeatherCard from './WeatherCard';
import { styles } from './styles';

interface Props {
  data: Weather;
  isLoading: boolean;
}

export default function WeatherInfo({ data, isLoading }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      style={{ opacity: isLoading ? 0.6 : 1 }}
    >
      <View style={styles.mainCard}>
        <Image style={styles.weatherIcon} source={{ uri: data.iconUri }} />

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{data.temp}</Text>
          <Text style={styles.tempUnit}>°C</Text>
        </View>

        <View style={styles.location}>
          <Text style={styles.name}>
            {data.city}, {data.country}
          </Text>
          <Ionicons name="location" size={20} style={styles.cityIcon} />
        </View>

        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.minMaxRow}>
          <Text style={styles.minMaxText}>Mín: {data.tempMin}°</Text>
          <Text style={styles.minMaxText}>Máx: {data.tempMax}°</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <WeatherCard
          icon={
            <Feather name="thermometer" size={20} color={THEME.COLORS.PURPLE} />
          }
          value={`${data.feelsLike}°C`}
          title="Sensação Térmica"
        />
        <WeatherCard
          icon={<Feather name="eye" size={20} color={THEME.COLORS.PURPLE} />}
          value={data.visibility}
          title="Visibilidade"
        />
        <WeatherCard
          icon={<Feather name="wind" size={20} color={THEME.COLORS.PURPLE} />}
          value={`${data.windSpeed} m/s`}
          title="Velocidade do Vento"
        />
        <WeatherCard
          icon={
            <Feather name="droplet" size={20} color={THEME.COLORS.PURPLE} />
          }
          value={`${data.humidity}%`}
          title="Umidade do Ar"
        />
        <WeatherCard
          icon={
            <MaterialCommunityIcons
              name="gauge"
              size={20}
              color={THEME.COLORS.PURPLE}
            />
          }
          value={`${data.pressure} hPa`}
          title="Pressão Atmosférica"
        />
        <WeatherCard
          icon={<Feather name="cloud" size={20} color={THEME.COLORS.PURPLE} />}
          value={`${data.clouds}%`}
          title="Nebulosidade"
        />
        <WeatherCard
          icon={
            <Feather name="sunrise" size={20} color={THEME.COLORS.PURPLE} />
          }
          value={data.sunrise}
          title="Nascer do Sol"
        />
        <WeatherCard
          icon={<Feather name="sunset" size={20} color={THEME.COLORS.PURPLE} />}
          value={data.sunset}
          title="Pôr do Sol"
        />
      </View>
    </ScrollView>
  );
}
