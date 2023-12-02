import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    title: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 20,
      marginBottom: 10,
    },
    cardContainer: {
      marginTop: 10,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "#F6F6F6",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 2,
      padding: 10,
      paddingVertical: 20,
    },
    cardImage: {
      width: 132,
      height: 78,
      marginRight: 20,
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 14,
      color: "#00726D",
    },
    cardText: {
      fontFamily: "Poppins_400Regular",
      fontSize: 11,
    },
    button: {
      backgroundColor: "#00726D",
      borderRadius: 20,
      paddingVertical: 7,
      marginTop: 5,
    },
    buttonText: {
      color: "white",
      fontFamily: "Poppins_600SemiBold",
      fontSize: 12,
      textAlign: "center",
    },
  });

export default styles