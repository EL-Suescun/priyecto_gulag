import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Color de fondo más suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40', // Color de texto más oscuro
    textAlign: 'center', // Centrar título
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#495057', // Color más claro para las etiquetas
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ced4da', // Color del borde del picker
    borderRadius: 5,
    backgroundColor: '#fff', // Color de fondo del picker
  },
  textInput: {
    height: 100,
    borderColor: '#ced4da',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff', // Color de fondo del campo de texto
    textAlignVertical: 'top', // Asegura que el texto se alinee desde arriba
  },
  button: {
    backgroundColor: '#007BFF', // Azul para el botón
    padding: 10,
    borderRadius: 5,
    marginTop: 20, // Separar el botón de los campos
  },
  buttonText: {
    color: '#fff', // Texto blanco en el botón
    fontSize: 18,
    textAlign: 'center', // Centrar texto del botón
  },
});

export default styles;
