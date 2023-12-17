import React from "react";
import { View, Text } from "react-native";
import RequestForm from "../../components/RequestForm";
import styles from "./style"

const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completa la información</Text>
      <RequestForm />
    </View>
  );
};

export default RequestScreen;
