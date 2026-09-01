import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Weather } from '../../domain/models/Weather';
import { getWeatherGradient } from '../../utils/getWeatherGradient';
import WeatherCard from './WeatherCard';
import { styles } from './styles';

interface Props {
  data: Weather;
  isLoading: boolean;
}

export default function WeatherInfo({ data, isLoading }: Props) {
  const theme = getWeatherGradient(data.iconCode);

  const textColor = theme.isDark ? '#F8FAFC' : '#0F172A';
  const subTextColor = theme.isDark ? '#94A3B8' : '#334155';
  const accentColor = theme.isDark ? '#38BDF8' : '#0F172A';

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      style={{ opacity: isLoading ? 0.5 : 1 }}
    >
      <View style={styles.mainCard}>
        <View style={styles.badgeContainer}>
          <Ionicons name="location-sharp" size={16} color={accentColor} />
          <Text style={[styles.name, { color: textColor }]}>
            {data.city}, {data.country}
          </Text>
        </View>

        <Image style={styles.weatherIcon} source={{ uri: data.iconUri }} />

        <View style={styles.temperatureContainer}>
          <Text style={[styles.temperature, { color: textColor }]}>
            {data.temp}
          </Text>
          <Text style={[styles.tempUnit, { color: accentColor }]}>°C</Text>
        </View>

        <Text style={[styles.description, { color: subTextColor }]}>
          {data.description}
        </Text>

        <View style={styles.minMaxRow}>
          <View style={styles.minMaxItem}>
            <Feather name="arrow-down" size={14} color={accentColor} />
            <Text style={[styles.minMaxText, { color: textColor }]}>
              Mín: {data.tempMin}°
            </Text>
          </View>
          <View
            style={[styles.dividerVertical, { backgroundColor: subTextColor }]}
          />
          <View style={styles.minMaxItem}>
            <Feather name="arrow-up" size={14} color={accentColor} />
            <Text style={[styles.minMaxText, { color: textColor }]}>
              Máx: {data.tempMax}°
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <WeatherCard
          icon={<Feather name="thermometer" size={18} color={accentColor} />}
          value={`${data.feelsLike}°C`}
          title="Sensação"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="droplet" size={18} color={accentColor} />}
          value={`${data.humidity}%`}
          title="Umidade"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="wind" size={18} color={accentColor} />}
          value={`${data.windSpeed} m/s`}
          title="Vento"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="eye" size={18} color={accentColor} />}
          value={data.visibility}
          title="Visibilidade"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={
            <MaterialCommunityIcons
              name="gauge"
              size={18}
              color={accentColor}
            />
          }
          value={`${data.pressure} hPa`}
          title="Pressão"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="cloud" size={18} color={accentColor} />}
          value={`${data.clouds}%`}
          title="Nuvens"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="sunrise" size={18} color={accentColor} />}
          value={data.sunrise}
          title="Nascer do Sol"
          isDark={theme.isDark}
        />
        <WeatherCard
          icon={<Feather name="sunset" size={18} color={accentColor} />}
          value={data.sunset}
          title="Pôr do Sol"
          isDark={theme.isDark}
        />
      </View>
    </ScrollView>
  );
}
