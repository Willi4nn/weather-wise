import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

interface InputTextProps {
  fetchWeather: (cityName: string) => void;
}

export default function InputText({ fetchWeather }: InputTextProps) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName.trim()) {
      fetchWeather(cityName.trim());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={cityName}
        style={styles.input}
        placeholder="Digite o nome da cidade"
        placeholderTextColor="#999"
        onChangeText={setCityName}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <Icon name="search" size={20} style={styles.icon} />
    </View>
  );
}