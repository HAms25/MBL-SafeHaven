// SignInForm.tsx
import React from "react";
import { Text, TextInput, View } from "../Themed";
import Auth from "../../hooks/Auth";
import AuthButton from "../AuthButton";
import styles from "./style";
import { TouchableOpacity } from "react-native";

const SignInForm = () => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignup, loading} =  Auth()
  AuthButton({ onSignUp: handleSignup, onLogin: handleLogin });

  const inicio = () => {
    handleLogin({ email, password });
};

  return (
    <View>
      <Text style={styles.title}>Hola!</Text>
      <Text style={styles.subtitle}>Bienvenido a SafeHaven</Text>
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
        onPress={inicio}
        disabled={ loading || !email || !password}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;
