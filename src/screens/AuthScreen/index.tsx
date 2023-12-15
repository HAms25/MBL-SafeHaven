import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View } from "../../components/Themed";
import SignInForm from "../../components/Login";
import SignUpForm from "../../components/SignUp";
import styles from "./style"
import Auth from "../../hooks/Auth";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function AuthForm() {

  const { mode, setMode} =  Auth()

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            {mode === "signUp" ? (
              <SignUpForm />
            ) : (
              <SignInForm />
            )}

            <View style={styles.footer}>
              <Text style={{ marginBottom: 20, fontFamily: "Poppins_400Regular" }}>
                {mode === "login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setMode(mode === "login" ? "signUp" : "login")}
              >
                <Text style={styles.buttonText}>
                  {mode === "login" ? "Regístrate" : "Inicia sesión"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

