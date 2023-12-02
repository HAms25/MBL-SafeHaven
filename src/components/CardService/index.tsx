import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

interface CardProps {
  imageSource: any;
  title: string;
  text: string;
  buttonText?: string;
  onPressButton?: () => void;
}

const CardService = ({
  imageSource,
  title,
  text,
  buttonText,
  onPressButton,
}: CardProps) => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    // Navegar a Employee
    navigation.navigate("Employee");
  };

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
        {buttonText && (
          <TouchableOpacity
            style={styles.button}
            onPress={onPressButton || handleButtonPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CardService;
