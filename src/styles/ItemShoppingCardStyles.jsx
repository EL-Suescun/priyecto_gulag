import { StyleSheet } from 'react-native';

const itemShoppingCardStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#ff6347',
    position: 'relative',
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 40,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#008000',
    fontWeight: 'bold',
  },
  itemPriceOriginal: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  itemQuantity: {
    fontSize: 16,
    color: '#333',
    marginRight: 20,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonIcon: {
    marginHorizontal: 10, // Aumentamos el margen entre los botones
    padding: 10,          // Agregamos padding para mejorar el clic
    borderRadius: 50,     // Hacemos los botones redondeados
    backgroundColor: '#ff6347', // Color de fondo para resaltar los botones
  },
  removeItem: {
    color: '#ff6347',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default itemShoppingCardStyles;
