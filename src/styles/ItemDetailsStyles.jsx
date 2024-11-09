import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 50,
    marginRight: 10,
  },
  backButtonIcon: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  originalPrice: {
    fontSize: 18,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 22,
    color: '#ff6347',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  addToCartButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemDetailsSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    color: '#333',
  },
  outOfStockText: {
    color: '#ff4c4c',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },


  ratingContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginBottom: 15, 
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,  
    backgroundColor: '#fff',
    fontSize: 16,
  },

  section: {
    marginBottom: 25,
  },

  question: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },

  commentContainer: {
    marginBottom: 15,
  },

  commentRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },

  emptyText: {
    fontSize: 16,
    color: '#aaa',
    fontStyle: 'italic',
  },
});

export default styles;
