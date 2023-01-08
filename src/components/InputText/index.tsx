import React, { useState } from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, View } from 'react-native';

interface InputTextProps {
  fetchWeather: (cityName: string) => void;
}

export default function InputText({ fetchWeather }: InputTextProps) {
  const [cityName, setCityName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        value={cityName}
        style={styles.input}
        onChangeText={(text) => setCityName(text)}
        onSubmitEditing={() => fetchWeather(cityName)}
      />
      <Icon name="search" size={20} style={styles.icon} />
    </View>
  );
}
