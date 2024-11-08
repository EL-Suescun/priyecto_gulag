import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#212f3d',
  },
  headerBackgroundContainerStyle: {
    backgroundColor: "#212f3d",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  tabBarStyle: {
    backgroundColor: "#212f3d",
  },
  tabBarLabelStyle: {
    fontSize: 12, // Tamaño de las etiquetas de los ítems
    fontWeight: "bold", // Etiquetas más destacadas
  },
  tabBarItemStyle: {
    // Puedes agregar padding o márgenes si quieres ajustar la apariencia de los ítems
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default styles;
