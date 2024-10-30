import { View } from "react-native";
// import Rutas from "./src/navigation/Rutas";
import ItemList from "./src/screens/ItemList";


const App = () => {
  return (
   <View style={{flex:1}}>
      {/* <Rutas/> */}
<ItemList/>
   </View>
  );
};

export default App;
