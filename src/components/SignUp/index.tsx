import React from "react";
import { Button, Text, TextInput, View } from "../Themed";
import Auth from "../../hooks/Auth";
import AuthButton from "../AuthButton";
import styles from "./style";
import { TouchableOpacity } from "react-native";

const SignUpForm = () => {
  const { email, setEmail, password, setPassword, handleSignup, handleLogin, loading} =  Auth()
  AuthButton({ onSignUp: handleSignup, onLogin: handleLogin });

  const registro = () => {
      handleSignup({ email, password });
  };

  return (
    <View>
      <Text style={styles.title}>Crear Cuenta</Text>
      <Text style={styles.subtitle}>¡Crea tu cuenta  y accede a nuestros servicios!</Text>
      <TextInput style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}
        onPress={registro}
        disabled={ loading || !email || !password }
      >
        <Text style={styles.buttonText}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;
