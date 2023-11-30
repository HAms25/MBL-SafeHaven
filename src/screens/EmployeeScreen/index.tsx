import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import CardEmployee from "../../components/CardEmployee";
import { dataEmployee } from "../../../data/employee";

const EmployeeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Servicios disponibles</Text>
        <View style={styles.cardContainer}>
          {dataEmployee.map((card) => (
            <CardEmployee key={card.id} {...card} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default EmployeeScreen;
