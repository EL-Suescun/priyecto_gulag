import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212f3d",
  },
  leftSide: {
    flex: 2,
    backgroundColor: "#212f3d",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 60,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
    color: "white"
  },
  subtittle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "left",
    color: "white"
  },
  TextInput: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#212f3d",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  createAccount: {
    fontSize: 18,
    color: "#212f3d",
    textDecorationLine: "underline",
  },
  roundedView: {
    flex: 2,
    borderRadius: 20, 
    elevation: 5, 
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    margin: 10,
  },
});

export default styles;
