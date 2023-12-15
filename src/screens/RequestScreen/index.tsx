// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import CardEmployee from '../../components/CardEmployee';
// import { dataEmployee } from '../../../data/employee';
// import styles from "./style";
// import RequestForm from '../../components/RequestForm';

// const RequestScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.title}>Completa la Información</Text>
//         <View style={styles.cardContainer}>
//           {dataEmployee.map((card) => (
//             <CardEmployee
//               key={card.id}
//               {...card}
//             />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   )
// }

// export default RequestScreen

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
