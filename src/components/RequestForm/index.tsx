import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface RequestFormData {
  selectedService: string;
  dniPhotos: File[];
  criminalRecord: File | null;
  workExperience: string;
}

interface RequestFormProps {
  onSubmit: (formData: RequestFormData) => void;
  onCancel: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmit, onCancel }) => {
  const [selectedService, setSelectedService] = useState("");
  const [dniPhotos, setDniPhotos] = useState<File[]>([]);
  const [criminalRecord, setCriminalRecord] = useState<File | null>(null);
  const [workExperience, setWorkExperience] = useState("");

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  const handleDniPhotoChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setDniPhotos(fileArray);
    }
  };

  const handleCriminalRecordChange = (file: File | null) => {
    setCriminalRecord(file);
  };

  const handleWorkExperienceChange = (value: string) => {
    setWorkExperience(value);
  };

  const handleSubmit = () => {
    const formData: RequestFormData = {
      selectedService,
      dniPhotos,
      criminalRecord,
      workExperience,
    };
    onSubmit(formData);
  };

  return (
    <View>
      <Text>Elige el servicio a ofrecer:</Text>
      <TextInput
        value={selectedService}
        onChangeText={handleServiceChange}
        placeholder="Selecciona un servicio"
      />

      <Text>Ingresa foto de tu DNI (Ambas Caras):</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Subir Archivo</Text>
      </TouchableOpacity>

      <Text>Ingresa tus antecedentes penales:</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Subir Archivo</Text>
      </TouchableOpacity>

      <Text>Acerca de tu experiencia laboral:</Text>
      <TextInput
        value={workExperience}
        onChangeText={handleWorkExperienceChange}
        placeholder="Ingrese su experiencia laboral"
        multiline
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCancel}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestForm;