import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "./style";
import Dropdown from "../Dropdown";
import { useUserInfo } from "../../lib/userContext";
import supabase from "../../lib/supabase";


const RequestForm = () => {
  const [dniName, setDniName] = React.useState("");
  const [pdfName, setPdfName] = React.useState("");
  const [experience, setExperience] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { session } = useUserInfo();

  const selectImage = async () => {
    try {
      const { canceled, assets } = await DocumentPicker.getDocumentAsync({
        type: "image/*", copyToCacheDirectory: false
      });

      console.log({ canceled, assets });

      if (!canceled) {
        if (assets && assets.length > 0) {
          const [selectedAsset] = assets;
          setDniName(selectedAsset.name);
        } else {
          console.log("No se seleccionaron assets");
        }
      } else {
        console.log("Selección cancelada");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const selectPDF = async () => {
    try {
      const { canceled, assets } = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", copyToCacheDirectory: false
      });

      console.log({ canceled, assets });

      if (!canceled && assets && assets.length > 0) {
        setPdfName(assets[0].name);
      } else {
        console.log("No se seleccionaron assets");
      }
    } catch (err) {
      console.error(err);
    }
  };

  

  const handleSendRequest = async () => {
    try {
         
      if (!session) {
        console.error("Usuario no autenticado");
        return;
      }
  
      // Obtiene el ID del usuario autenticado
      const userId = session.user.id;
  
      // Inserta los datos en la tabla "requests" con user_id
      const { data, error } = await supabase
        .from("requests")
        .insert([
          {
            user_id: userId,
            service_ofre: selectedService,
            experien: experience,
            dni: dniName,
            antecedent: pdfName,
          },
        ]);
  
      if (error) {
        throw error;
      }
  
      console.log("Datos insertados correctamente:", data);
    } catch (error) {
      console.error("Error al insertar datos:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Selecciona el servicio a ofrecer:</Text>
        <Dropdown selectedValue={selectedService}
        onValueChange={(value) => setSelectedService(value)}/>
        <Text style={styles.label}>Ingresa foto de tu DNI (Ambas Caras):</Text>
        <Text>{dniName}</Text>
        <TouchableOpacity style={styles.button} onPress={selectImage}>
          <Text style={styles.buttonText}>Subir Archivo</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Ingresa tus antecedentes penales:</Text>
        <Text>{pdfName}</Text>
        <TouchableOpacity style={styles.button} onPress={selectPDF}>
          <Text style={styles.buttonText}>Subir Archivo</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Acerca de tu experiencia laboral:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su experiencia laboral"
          multiline
          value={experience}
          onChangeText={(texto) => setExperience(texto)}
        />

        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.button} onPress={handleSendRequest}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestForm;
