import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 40
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Poppins_600SemiBold"
  },
  title: {
    fontSize: 16,
    marginTop: 25,
    marginBottom: 20,
    fontFamily: "Poppins_600SemiBold"
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoColumn: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  infoLabel: {
    fontFamily: "Poppins_600SemiBold"
  },
  infoValue: {
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    fontFamily: "Poppins_400Regular"
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_600SemiBold"
  },
  buttonContainer: {
    flexDirection: "row",
  },
  saveButton: {
    backgroundColor: "#00726D",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#00726D",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  editButton: {
    backgroundColor: "#00726D",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  });
  
  export default styles