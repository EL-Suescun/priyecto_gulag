import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 15,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 16,
  },
  nickname: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  botonew: {
    fontSize: 18,
    color: "green",
    textAlign: "left",
    padding: 10,
  },
  productCard: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "black",
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    minHeight: 120,
    width: "100%",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    marginLeft: 16,
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "gray",
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  imagePlaceholder: {
    width: 90,
    height: 90,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    padding: 20,
    borderWidth: 0.4,
    borderColor: "black",
    borderRadius: 3,
  },
  mensajes: {
    padding: 60,
    marginBottom: 1,
  },
  buttonupdate: {
    backgroundColor: "blue",
    borderRadius: 7,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "40%",
  },
  buttondelete: {
    backgroundColor: "red",
    borderRadius: 7,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "40%",
  },
  botones:{
    flexDirection: "row",
    justifyContent: "space-around",
    
  }
});

export default styles;
