import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface WeatherCardProps {
  image: any;
  value: string;
  title: string;
}

function WeatherCard({ image, value, title }: WeatherCardProps) {
  return (
    <View style={styles.cardInfo}>
      <Image source={image} />
      <Text style={styles.cardValue}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default WeatherCard;