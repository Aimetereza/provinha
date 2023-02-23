import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { HomeScreen } from "../screens/HomeScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { darkTheme, defaultTheme, theme } from "../utils/theme";
import { FormularioScreen } from "../screens/FormularioScreen";
import { LoginScreen } from "../screens/LoginScreen";


const Stack = createNativeStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

export const RootNavigator = () => {
  const theme = useColorScheme() === "dark" ? darkTheme : defaultTheme;
  // use dark theme is system is in dark mode
  return (
    <NavigationContainer theme={theme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // remove o cabeçalho padrão
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={MaterialBottomTabNavigation} />
      <Stack.Screen name="Formulario" component={MaterialBottomTabNavigation} />
      <Stack.Screen name="Login" component={MaterialBottomTabNavigation} />
    </Stack.Navigator>
  );
};

const MaterialBottomTabNavigation = () => {
  const theme = useColorScheme() === "dark" ? darkTheme : defaultTheme;
  return (
    <MaterialBottomTab.Navigator theme={theme}>
      <MaterialBottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: "home",
        }}
      />
      <MaterialBottomTab.Screen
        name="Formulario"
        component={FormularioScreen}
        options={{
          tabBarIcon: "clipboard",
        }}
        
      />



    </MaterialBottomTab.Navigator>
  );
};

