import React from 'react'
import { ScrollView, View, Text, Image, ActivityIndicator, FlatList } from 'react-native'
import styles from './style'
import useEmployeeData from '../../hooks/useEmployeeData';
import CardProfile from '../../components/CardProfile';
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

type ProfileEmployeeScreenRouteProp = RouteProp<RootStackParamList, "ProfileEmployee">;

export const ProfileEmployeeScreen = ({ route }: { route: ProfileEmployeeScreenRouteProp }) => {
  const id = route.params?.id;
  const { employees, loading, error } = useEmployeeData();

  console.log("Este es el employeeId:", id)
  // Encuentra el empleado con el ID correspondiente
  const employee = employees.find(emp => emp.id === id);
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil de Proveedor</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#00726D" />
        ) : error ? (
          <Text>{error}</Text>
        ) : employee ? (
          <CardProfile
            id={employee.id}
            imageSource={employee.image_path}
            title={employee.name}
            cellphone={employee.cellphone}
            info={employee.info}
          />
        ) : (
          <Text>No se encontró el empleado</Text>
        )}
      </View>
    </ScrollView>
  )
}
