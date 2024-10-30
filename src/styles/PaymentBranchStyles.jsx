import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15, // Reducción del padding general
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Espaciado reducido
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacio entre elementos reducido
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDescription: {
    fontSize: 12,
    color: '#666', // Color más sutil para la descripción
  },
  numericInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    width: '60%', // Limitando el ancho del campo numérico
  },
  itemPrice: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10, // Espaciado vertical reducido
    backgroundColor: '#fff',
  },
  paymentMethodLabel: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10, // Espaciado vertical reducido
    color: '#333',
  },
  flatListContent: {
    paddingBottom: 10, // Espaciado en el fondo de la lista
  },
});

export default styles;
