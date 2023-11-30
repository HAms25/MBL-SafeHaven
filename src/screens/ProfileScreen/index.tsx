import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from '../../components/Themed'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/imageService/plomero.png')} // Ruta de la imagen de perfil
          style={styles.profileImage}
        />
        <Text style={styles.username}>Nombre de Usuario</Text>
        <Text style={styles.title}>Información</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombre:</Text>
            <TextInput style={styles.infoValue}>John</TextInput>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Apellido:</Text>
            <TextInput style={styles.infoValue}>Doe</TextInput>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Correo:</Text>
            <TextInput style={styles.infoValue}>johndoe@example.com</TextInput>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Celular:</Text>
            <TextInput style={styles.infoValue}>1234567890</TextInput>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Dirección:</Text>
            <TextInput style={styles.infoValue}>Calle Principal 123</TextInput>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Biografía:</Text>
            <TextInput style={styles.infoValue}>Lorem ipsum dolor sit amet...</TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile