import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 20,
    },
    square: {
      width: '40%',
      height: 150,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: 'green',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    squareText: {
      marginTop: 10,
      fontSize: 16,
      color: 'green',
      fontWeight: 'bold',
    }
  });

  export default styles;