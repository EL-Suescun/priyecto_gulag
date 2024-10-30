import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login"
import Register from "../screens/Register"
import TabNavigator from "../navigation/TabNavigator"
import AddProducts from "../screens/AddProducts"


const Stack = createStackNavigator();

const Rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"black"}, headerTintColor: 'white',headerTitleAlign: 'center',}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={TabNavigator}  options={{headerShown:false}}  />
        <Stack.Screen name="AddProducts" component={AddProducts}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rutas;
