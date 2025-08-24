import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/LoginScreen";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen"; 
import MenuScreen from "../pages/MenuScreen";
import CounterScreen from "../pages/CounterScreen";
import ListManagerScreen from "../pages/ListManagerScreen";
import StyleExampleScreen from "../pages/StyleExampleScreen";
import FlexboxExampleScreen from "../pages/FlexboxExampleScreen";
import GridExampleScreen from "../pages/GridExampleScreen";



const stack = createStackNavigator();

export default function Navigation (){
  return (
      <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Menu" component={MenuScreen} />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="Counter" component={CounterScreen} />
        <stack.Screen name="ListMangerScreen" component={ListManagerScreen} />
        <stack.Screen name="StyleExampleScreen" component={StyleExampleScreen} />
        <stack.Screen name="FlexboxExampleScreen" component={FlexboxExampleScreen} />
        <stack.Screen name="GridExampleScreen" component={GridExampleScreen} />
        
      </stack.Navigator>
  );
}   