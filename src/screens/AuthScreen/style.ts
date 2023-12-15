import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 25,
      paddingTop:40
    },
    title: {
      fontSize: 32,
      textAlign: "left",
      marginBottom: 24,
      marginTop: 16,
      fontFamily: "Poppins_400Regular"
    },
    input: {
      paddingVertical: 8,
    },
    footer: {
      paddingTop:40,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      fontSize: 20,
      backgroundColor: "#00726D",
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
      fontFamily: 'Poppins_400Regular',
    },
  });

export default styles
  