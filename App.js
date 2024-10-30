import { View } from "react-native";
// import Rutas from "./src/navigation/Rutas";
import CategoryList from "./src/screens/CategoryList";


const App = () => {
  return (
   <View style={{flex:1}}>
      {/* <Rutas/> */}
<CategoryList/>
   </View>
  );
};

export default App;
