import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemPrice: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    width: 50,
    textAlign: 'center',
  },
  addButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
  },
  deleteButton: {
    padding: 5,
    backgroundColor: '#f44336',
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#fff',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default styles;
