import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#f0f4f8',  // Coloca un color de fondo similar al de Profile
  },
  title: {
    fontSize: 28,
    fontWeight: '700',  // Alineado con el estilo de Profile
    marginBottom: 30,
    color: '#2c3e50',  // Color de texto similar al de Profile
    textAlign: 'center',
  },
  purchaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10, 
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
