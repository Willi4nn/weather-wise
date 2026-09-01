import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, TextInput, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface InputTextProps {
  onSearch: (cityName: string) => void;
  isLoading: boolean;
}

export default function InputText({ onSearch, isLoading }: InputTextProps) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName.trim() && !isLoading) {
      onSearch(cityName.trim());
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
        editable={!isLoading}
      />
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={THEME.COLORS.PURPLE}
          style={styles.icon}
        />
      ) : (
        <Ionicons name="search" size={20} style={styles.icon} />
      )}
    </View>
  );
}
