import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryContainer: {
    marginBottom: 20, // Espacio entre categorías y artículos
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedCategory: {
    backgroundColor: '#6200ea', // Cambia solo el color de fondo
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginBottom: 5,
    marginRight: 5, // Espaciado entre la imagen y el texto
  },
  itemContainer: {
    flex: 1, // Asegúrate de que el contenedor de artículos ocupe el espacio disponible
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default styles;
