import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style"
import supabase from "../../lib/supabase";

interface CardProps {
  id: number;
  imageSource: string;
  title: string;
  text: string;
  buttonText?: string;

  onPressButton?: () => void;
}

const CardEmployee = ({
  id,
  imageSource,
  title,
  text,
  buttonText,
  onPressButton,
}: CardProps) => {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  const fetchImageUrl = async () => {
    const storage = supabase.storage;
    const imageUrl = await storage.from("images").getPublicUrl(imageSource);
    setImageUrl(imageUrl.data.publicUrl);
  };

  useEffect(() => {
    fetchImageUrl();
  }, [imageSource]);

  const handleButtonPress = () => {
    navigation.navigate("ProfileEmployee", { id: id });
  };
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      ) : (
        <View style={styles.cardImage} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
        {buttonText && (
          <TouchableOpacity
            style={styles.button}
            onPress={onPressButton ? onPressButton : handleButtonPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CardEmployee;