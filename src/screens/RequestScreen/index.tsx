import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CardEmployee from '../../components/CardEmployee';
import { dataEmployee } from '../../../data/employee';
import styles from "./style";


const RequestScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Completa la Información</Text>
        <View style={styles.cardContainer}>
          {dataEmployee.map((card) => (
            <CardEmployee
              key={card.id}
              {...card}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default RequestScreen

// import React from "react";
// import { View, Text } from "react-native";
// import RequestForm from "./RequestForm";

// const RequestScreen: React.FC = () => {
//   const handleSubmit = (formData: RequestFormData) => {
//     // Aquí puedes realizar acciones con los datos del formulario
//     console.log(formData);
//   };

//   const handleCancel = () => {
//     // Aquí puedes realizar acciones al cancelar el formulario
//     console.log("Formulario cancelado");
//   };

//   return (
//     <View>
//       <Text>Formulario de solicitud</Text>
//       <RequestForm onSubmit={handleSubmit} onCancel={handleCancel} />
//     </View>
//   );
// };

// export default RequestScreen;
