import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Dropdown from "../Dropdown";
import { useUserInfo } from "../../lib/userContext";
import supabase from "../../lib/supabase";
import { decode } from "base64-arraybuffer";
import { readAsStringAsync } from "expo-file-system";
import { Alert } from "react-native";

const RequestForm = () => {
  const [dniName, setDniName] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [dniFile, setDniFile] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [experience, setExperience] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { session } = useUserInfo();
  const navigation = useNavigation();
  const [isDocumentPickerInProgress, setDocumentPickerInProgress] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectFile = async (
    fileStateSetter: React.Dispatch<React.SetStateAction<string | null>>,
    nameStateSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    try {
      setDocumentPickerInProgress(true);
      const { canceled, assets } = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      console.log({ canceled, assets });

      if (!canceled && assets && assets.length > 0) {
        const selectedAsset = assets[0];
        fileStateSetter(selectedAsset.uri);
        nameStateSetter(selectedAsset.name);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const selectImage = async () => {
    return await selectFile(setDniFile, setDniName);
  };

  const selectPDF = async () => {
    return await selectFile(setPdfFile, setPdfName);
  };

  const uploadFile = async (file: string, fileName: string, folder: string) => {
    const fileData = await readAsStringAsync(file, { encoding: "base64" });
    await supabase.storage
      .from(folder)
      .upload(`public/${fileName}`, decode(fileData), {
        contentType: "application/pdf",
      });

    const { data } = await supabase.storage
      .from(folder)
      .getPublicUrl(`public/${fileName}`);

    if (data) {
      console.log(`URL pública del archivo de ${folder}:`, data.publicUrl);
    }
  };

  //Reset
  const resetForm = () => {
    setDniName("");
    setPdfName("");
    setDniFile(null);
    setPdfFile(null);
    setExperience("");
    setSelectedService(null);
  };

  const handleSendRequest = async () => {
    try {
      if (!session) {
        console.error("Usuario no autenticado");
        return;
      }

      // Obtiene el ID del usuario autenticado
      const userId = session.user.id;

      if (!dniFile || !pdfFile || !experience || !selectedService) {
        Alert.alert("Error", "Por favor, completa todos los campos");
        return;
      }

      setIsLoading(true);

      await uploadFile(dniFile, dniName, "dnis");
      await uploadFile(pdfFile, pdfName, "antecedent");

      // Inserta los datos en la tabla "requests" con user_id
      const { data, error } = await supabase.from("requests").insert([
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

      setTimeout(() => {
        try {
          Alert.alert(
            "¡Envío Exitoso!",
            "Se te enviará una notificación a tu correo, si los datos ingresados son validados correctamente por SafeHaven.",
            [{ text: "Continuar", onPress: resetForm }]
          );
        } catch (error) {
          console.error("Error al mostrar alerta:", error);
        } finally {
          setIsLoading(false);
        }
      }, 500); // You can adjust the delay time as needed
    } catch (error) {
      console.error("Error al insertar datos:", error);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.container, styles.fullScreenContainer]}>
        <Text style={styles.label}>Selecciona el servicio a ofrecer:</Text>
        <Dropdown
          selectedValue={selectedService}
          onValueChange={(value) => setSelectedService(value)}
        />
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#00726D" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default RequestForm;
