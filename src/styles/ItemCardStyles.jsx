import { StyleSheet } from 'react-native';

const itemCardStyles = StyleSheet.create({
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
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 40, 
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
  itemPriceDiscounted: {
    fontSize: 16,
    color: '#ff6347',
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  outOfStockText: {
    color: '#999',
  },
  addToCartButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default itemCardStyles;
