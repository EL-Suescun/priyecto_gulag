import { View } from "react-native";
// import Rutas from "./src/navigation/Rutas";
import ItemDetails from "./src/screens/ItemDetails";


const App = () => {
  return (
   <View style={{flex:1}}>
      {/* <Rutas/> */}
<ItemDetails/>
   </View>
  );
};

export default App;
