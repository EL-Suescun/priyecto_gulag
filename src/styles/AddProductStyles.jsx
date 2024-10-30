import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:23
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "green",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
    height: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 16,
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: 80,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 50,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "green",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tittleimage: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
    color: "green",
  },
});

export default styles;
