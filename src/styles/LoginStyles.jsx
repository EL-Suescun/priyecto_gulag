import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
  },
  leftSide: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 60,
    backgroundColor: "#1C2833",
  },
  title: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#E5E8E8",
  },
  subtittle: {
    fontSize: 18,
    marginBottom: 24,
    color: "#AAB7B8",
  },
  roundedView: {
    flex: 3,
    borderRadius: 20,
    backgroundColor: "#FDFEFE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    margin: 20,
  },
  TextInput: {
    width: "100%",
    height: 50,
    borderColor: "#D5DBDB",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#F8F9F9",
  },
  button: {
    backgroundColor: "#1C2833",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FDFEFE",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccount: {
    fontSize: 16,
    color: "#3498DB",
    textDecorationLine: "underline",
  },
});

export default styles;
