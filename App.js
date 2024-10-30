import { View } from "react-native";
// import Rutas from "./src/navigation/Rutas";
import MyFavorites from "./src/screens/MyFavorites";


const App = () => {
  return (
   <View style={{flex:1}}>
      {/* <Rutas/> */}
<MyFavorites/>
   </View>
  );
};

export default App;
