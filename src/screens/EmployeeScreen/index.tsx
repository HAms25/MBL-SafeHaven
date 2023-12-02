import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import CardEmployee from "../../components/CardEmployee";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import useEmployeeData from "../../hooks/useEmployeeData";

const EmployeeScreen = () => {
  const { employees, loading, error } = useEmployeeData();
  const navigation = useNavigation();

  const handleOfferServicesPress = () => {
    // Navegar a Request
    navigation.navigate("Request");
  };

  useEffect(() => {
    //Puedo eliminar este codigo y seguria funcionando
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajadores</Text>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          backgroundColor: "#00726D",
          padding: 10,
          marginBottom: 10,
          borderRadius: 59,
        }}
        onPress={handleOfferServicesPress}
      >
        <Text style={{ color: "#FFF", fontFamily: "Poppins_600SemiBold" }}>Ofrecer Servicios</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#00726D" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardEmployee
            title={item.name}
            text={item.info}
            imageSource={item.image_path}
            buttonText="Ver Perfil"
          />
        )}
      />
      )}
    </View>
  );
};

export default EmployeeScreen;
