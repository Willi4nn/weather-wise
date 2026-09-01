import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface WeatherCardProps {
  icon: React.ReactNode;
  value: string;
  title: string;
  isDark?: boolean;
}

export default function WeatherCard({ icon, value, title }: WeatherCardProps) {
  return (
    <View style={styles.cardInfo}>
      <View style={styles.cardHeader}>
        {icon}
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Text style={styles.cardValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
