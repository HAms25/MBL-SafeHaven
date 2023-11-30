import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileContainer: {
      alignItems: 'center',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 10,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    infoContainer: {
      width: '80%',
      marginBottom: 20,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoValue: {
      flex: 1,
      textAlign: 'right',
    },
    editButton: {
      backgroundColor: 'blue',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    editButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default styles