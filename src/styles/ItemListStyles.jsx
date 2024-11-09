import { StyleSheet } from 'react-native';

const itemListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonSelected: {
    backgroundColor: '#ff6347',
    borderColor: '#ff6347',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});

export default itemListStyles;
