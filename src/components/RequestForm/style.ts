import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      gap: 20,
      padding: 15,
    },
    label: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 14,
    },
    button: {
      backgroundColor: "#00726D",
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 15,
      marginBottom: 10
    },
    buttonText: {
      color: "white",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 12,
      textAlign: "center",
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: "space-evenly"
    },
    textInput: {
      marginBottom: 30
    },
    selectedFile: {
      color: "black",
    },
    loadingOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullScreenContainer: {
      flex: 2,
    },
  });
  
  export default styles