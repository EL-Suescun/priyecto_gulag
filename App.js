import { View } from "react-native";
// import Rutas from "./src/navigation/Rutas";
import MyPurchases from "./src/screens/MyPurchases";


const App = () => {
  return (
   <View style={{flex:1}}>
      {/* <Rutas/> */}
<MyPurchases/>
   </View>
  );
};

export default App;
