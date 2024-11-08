import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', 
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center', 
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#333',
  },
  categoryButtonSelected: {
    backgroundColor: '#1e3a8a', 
    borderWidth: 2, 
    borderColor: '#0c2461', 
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25, 
    alignItems: 'center', 
    shadowColor: '#0c2461', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, 
  },
  categoryButtonTextSelected: {
    fontSize: 14,
    color: '#fff', 
    fontWeight: 'bold', 
  },
  
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row', 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, 
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15, 
  },
  itemDetails: {
    flex: 1, 
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
  favorite: {
    fontSize: 30,
    marginTop: 5,
  },
  favoriteIcon: {
    position: 'absolute', 
    top: 10,
    right: 10,
  },
  
  outOfStockText: {
    color: '#999',  
  },
  outOfStockPrice: {
    color: '#ccc',  
  },

  favoriteRemoveContainer: {
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
  },

  removeButton: {
    backgroundColor: '#FF4C4C',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10, 
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
