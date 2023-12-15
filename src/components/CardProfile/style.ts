import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      gap: 10
    },
    name: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 20,
      marginBottom: 10,
      alignSelf:"center",
    },
    tittle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        marginBottom: 10,
        alignSelf:"center",
      },
    cardImage: {
      width: 120,
      height: 120,
      marginTop: 30,
      alignSelf:"center",
      borderRadius: 200,
    },
    subTittle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 14,
        marginBottom: 10,
    },
    subContainer: {
        flex: 1,
        marginBottom:15,
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
    },
    card: {
        marginBottom: 10,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 2,
        padding: 14,
        paddingVertical: 20,
    },
  });
  
  
export default styles
