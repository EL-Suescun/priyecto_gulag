import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8', // Fondo claro para mayor contraste
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Color del texto más oscuro
    textAlign: 'center', // Centrar el título
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Fondo blanco para los items
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Añadir sombra para darle profundidad
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444', // Un poco más oscuro para la descripción
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#008000', // Verde para el valor
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discount: {
    fontSize: 14,
    color: '#d9534f', // Rojo para el descuento
    marginRight: 5,
  },
  discountIcon: {
    marginLeft: 5,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default styles;
