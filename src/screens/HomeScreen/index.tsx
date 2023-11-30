import React from "react";
import { View, Text, ScrollView } from "react-native";
import CardService from "../../components/CardService";
import { dataService } from "../../../data/service";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Servicios disponibles</Text>
        <View style={styles.cardContainer}>
          {dataService.map((card) => (
            <CardService
              key={card.id}
              {...card}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
