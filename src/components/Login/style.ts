import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inner: {
      padding: 30,
      flex: 1,
    },
    title: {
      fontSize: 32,
      textAlign: "left",
      marginTop: 30,
      fontFamily: "Poppins_400Regular"
    },
    subtitle: {
        fontSize: 16,
        color: "#494949",
        textAlign: "left",
        marginBottom: 40,
        fontFamily: "Poppins_400Regular"
      },
    input: {
      paddingVertical: 8,
      marginBottom: 20,
      fontSize: 16,
      fontFamily: 'Poppins_400Regular',
      color: '#333',
      borderWidth: 1, 
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: "#FAFAFA"
    },
    button: {
        fontSize: 20,
        backgroundColor: "#00726D",
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 30
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
      },
  });

export default styles