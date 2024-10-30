import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8', // Color de fondo más suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center', // Centrado del título
  },
  purchaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Fondo blanco para los ítems
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra en Android
    marginBottom: 15, // Espaciado entre ítems
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10, // Bordes redondeados para las imágenes
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
  },
  description: {
    fontSize: 18,
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
