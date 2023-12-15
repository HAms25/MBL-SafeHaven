import React, { useEffect, useState } from "react";
import ProfileForm from "../../components/ProfileForm";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {
  nombre: "Nombre",
  apellidos: "Apellidos",
  correo: "name@example.com",
  telefono: "999999999",
  biografia: "Soy ...",
  direccion: "Calle 123",
};

const ProfileScreen = () => {

  const [session, setSession] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [valores, setValores] = useState(initialState);
  const [valoresOriginales, setValoresOriginales] = useState(initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("userData");
        if (savedData) {
          setValores(JSON.parse(savedData));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(valores));
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  const handleGuardar = () => {
    setModoEdicion(false);
    setValoresOriginales(valores);
  };

  const handleCancelar = () => {
    setModoEdicion(false);
    setValores(valoresOriginales);
  };

  const handleEditar = () => {
    setModoEdicion(true);
    setValoresOriginales(valores);
  };

  const handleChange = (field: string, value: string) => {
    setValores((prevValores) => ({
      ...prevValores,
      [field]: value,
    }));
  };

  return (
    <ProfileForm
      modoEdicion={modoEdicion}
      valores={valores}
      handleGuardar={handleGuardar}
      handleCancelar={handleCancelar}
      handleEditar={handleEditar}
      handleChange={handleChange}
      saveData={saveData}
    />
  );
};

export default ProfileScreen;






// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import styles from "./style";

// const Profile = () => {
//   const initialState = {
//     nombre: "Nombre",
//     apellidos: "Apellidos",
//     correo: "name@example.com",
//     telefono: "999999999",
//     biografia: "Soy ...",
//     direccion: "Calle 123",
//   };

//   const [modoEdicion, setModoEdicion] = useState(false);
//   const [valores, setValores] = useState(initialState);
//   const [valoresOriginales, setValoresOriginales] = useState(initialState);

//   const handleGuardar = () => {
//     setModoEdicion(false); 
//     setValoresOriginales(valores);
//   };
  
//   const handleCancelar = () => {
//     setModoEdicion(false); 
//     setValores(valoresOriginales);
//   };
  
//   const handleEditar = () => {
//     setModoEdicion(true);
//     setValoresOriginales(valores);
//   };

//   const handleChange = (field: string, value: string) => {
//     setValores((prevValores) => ({
//       ...prevValores,
//       [field]: value,
//     }));
//   };
  

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Image
//           style={styles.profileImage}
//           source={require("../../../assets/splash.png")}
//         />
//         <Text style={styles.username}>Nombre de Usuario</Text>
//         <Text style={styles.title}>Información Personal</Text>
//         <View style={styles.infoRow}>
//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Nombres</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.nombre}
//               onChangeText={(text) => handleChange("nombre", text)}
//             />
//           </View>

//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Apellidos</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.apellidos}
//               onChangeText={(text) => handleChange("apellidos", text)}
//             />
//           </View>
//         </View>

//         <View style={styles.infoRow}>
//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Correo</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.correo}
//               onChangeText={(text) => handleChange("correo", text)}
//             />
//           </View>

//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Teléfono</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.telefono}
//               onChangeText={(text) => handleChange("telefono", text)}
//             />
//           </View>
//         </View>

//         <View style={styles.infoRow}>
//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Biografía</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.biografia}
//               onChangeText={(text) => handleChange("biografia", text)}
//             />
//           </View>

//           <View style={styles.infoColumn}>
//             <Text style={styles.infoLabel}>Dirección</Text>
//             <TextInput
//               style={styles.infoValue}
//               editable={modoEdicion}
//               value={valores.direccion}
//               onChangeText={(text) => handleChange("direccion", text)}
//             />
//           </View>
//         </View>

//         {modoEdicion ? (
//           <View>
//             <TouchableOpacity onPress={handleGuardar} style={styles.saveButton}>
//               <Text style={styles.buttonText}>Guardar</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleCancelar}>
//               <Text style={styles.buttonText}>Cancelar</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity onPress={handleEditar}>
//             <Text style={styles.buttonText}>Editar</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default Profile;
