import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface CardProps {
  imageSource: any;
  title: string;
  text: string;
  buttonText?: string;
  onPressButton?: () => void;
}

const CardEmployee = ({
  imageSource,
  title,
  text,
  buttonText,
  onPressButton,
}: CardProps) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Navegar a Request
    navigation.navigate("Request");
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

export default CardEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
    padding: 10,
    paddingVertical: 20,
  },
  cardImage: {
    width: 132,
    height: 78,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#00726D",
  },
  cardText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#00726D",
    borderRadius: 20,
    paddingVertical: 7,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    textAlign: "center",
  },
});
