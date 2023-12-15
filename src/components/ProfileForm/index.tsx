import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./style";

interface ProfileFormProps {
  modoEdicion: boolean;
  valores: Record<string, string>;
  handleGuardar: () => void;
  handleCancelar: () => void;
  handleEditar: () => void;
  handleChange: (field: string, value: string) => void;
  saveData: () => void;

}

const ProfileForm = ({
  modoEdicion,
  valores,
  handleGuardar,
  handleCancelar,
  handleEditar,
  handleChange,
  saveData,
}: ProfileFormProps) => {

  const data = [valores];
  const renderItem = () => (
    <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/splash.png")}
        />
        <Text style={styles.username}>Nombre de Usuario</Text>
        <Text style={styles.title}>Información Personal</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Nombres</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.nombre}
              onChangeText={(text) => handleChange("nombre", text)}
            />
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Apellidos</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.apellidos}
              onChangeText={(text) => handleChange("apellidos", text)}
            />
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Correo</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.correo}
              onChangeText={(text) => handleChange("correo", text)}
            />
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Teléfono</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.telefono}
              onChangeText={(text) => handleChange("telefono", text)}
            />
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Biografía</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.biografia}
              onChangeText={(text) => handleChange("biografia", text)}
            />
          </View>

          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Dirección</Text>
            <TextInput
              style={styles.infoValue}
              editable={modoEdicion}
              value={valores.direccion}
              onChangeText={(text) => handleChange("direccion", text)}
            />
          </View>
        </View>

        {modoEdicion ? (
          <View>
            <TouchableOpacity onPress={() => { handleGuardar(); saveData(); }} style={styles.saveButton}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancelar}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEditar}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ProfileForm;