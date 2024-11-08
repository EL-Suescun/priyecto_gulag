import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, 
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, 
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 5, 
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8, 
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333', 
  },
  itemDescription: {
    fontSize: 14,
    color: '#777', 
  },
  itemPrice: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#e91e63',
    fontSize: 16, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 15, 
    backgroundColor: '#fff',
    fontSize: 16, 
  },
  paymentMethodLabel: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15, 
    color: '#333',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
