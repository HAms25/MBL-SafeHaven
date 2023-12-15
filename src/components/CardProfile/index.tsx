import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import * as RNLocalize from "react-native-localize";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import supabase from "../../lib/supabase";
import styles from "./style";


interface CardProfileProps {
  id: number;
  imageSource: string;
  title: string;
  cellphone: string;
  info: string;
}

const CardProfile = ({
  imageSource,
  title,
  cellphone,
  info,
}: CardProfileProps) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImageUrl = async () => {
    const storage = supabase.storage;
    const imageUrl = await storage.from("images").getPublicUrl(imageSource);
    setImageUrl(imageUrl.data.publicUrl);
  };

  useEffect(() => {
    fetchImageUrl();
  }, [imageSource]);

  const handleWhatsAppPress = () => {
    const countryCode = "+51";
    const formattedCellphone = countryCode + cellphone;
    const url = `whatsapp://send?phone=${formattedCellphone}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      ) : (
        <View />
      )}
      <Text style={styles.name}>{title}</Text>
      
      <Text style={styles.tittle}>Información</Text>
      <View style={styles.card}>
      <View style={styles.subContainer}>
      <Text style={styles.subTittle}>Sobre mí</Text>
      <Text style={styles.text}>{info}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.subTittle}>Contáctame</Text>
      <TouchableOpacity onPress={handleWhatsAppPress} >
            <Icon name="whatsapp" size={45} color="#25D366" />
          </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default CardProfile;
