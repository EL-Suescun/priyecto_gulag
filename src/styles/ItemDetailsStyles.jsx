import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Fondo claro
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Color de texto más oscuro
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555', // Texto descriptivo en un gris más claro
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Verde para el precio
    marginBottom: 10,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  features: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  section: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff', // Fondo blanco para secciones
    elevation: 2, // Sombra para dar profundidad
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  paymentMethods: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff', // Fondo blanco para el campo de entrada
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  commentContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Fondo gris claro para comentarios
  },
  commentRating: {
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
