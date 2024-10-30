import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
    borderRadius: 12, 
    elevation: 3, 
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8, 
    resizeMode: 'cover',
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 18,
    fontWeight: '600', 
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
