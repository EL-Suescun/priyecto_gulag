import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f6f9',  // Fondo más suave para la pantalla
    width: '100%'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#2c3e50',  // Texto en color oscuro
    textAlign: 'center',
  },
  card: {
    width: '100%',
    padding: 30,
    borderRadius: 15,  // Bordes más suaves
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // Más prominente
    alignItems: 'center',
  },
  cardScreen: {
    flex: 1,
    width: '100%',
    padding: 30,
    borderRadius: 15,  // Bordes más suaves
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10, // Más prominente
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#3498db',  // Borde de la foto con color más llamativo
    backgroundColor: '#e0e0e0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,  // Añadir un pequeño padding para los iconos
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,  // Aumentar ligeramente el tamaño de la fuente
    color: '#3498db',  // Cambio en el color del texto de los iconos
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#34495e',  // Color de texto gris oscuro para etiquetas
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
});

export default styles;
