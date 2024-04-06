import { StatusBar } from 'expo-status-bar';
import Splashscreen from './screens/splash-screen';
import {
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
  Image,
  StyleSheet, Text, Button, TouchableOpacity,
} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import ToVoirImage from  "./assets/splash1.png";
// import { createStackNavigator } from "@react-navigation/stack";
// const ChooseStack = createStackNavigator();
// const stackScreenOptions = {
//   headerShown: false,
//   gestureEnabled: true,
// };
// function ChooseScreen() {
//   return (
//     <MoveStack.Navigator screenOptions={stackScreenOptions}>
//       <MoveStack.Screen name="MoveList" component={MoveList} />
//       <MoveStack.Screen name="MoveDetail" component={MoveDetail} />
//     </MoveStack.Navigator>
//   );
// }
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    <Image source={ToVoirImage} style={styles.banner} />
    <Text h4 style={styles.heading}>
      Get Started with ToVoir
    </Text>
    <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
            <Text style={[styles.buttonText, styles.buttonRegisterText]}>
              Continue
            </Text>
          </TouchableOpacity>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBBD09',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
    marginBottom: 10,
  },
  button: {
    height: 82,
    paddingHorizontal: 89,
    borderRadius: 40,
    backgroundColor: "#000000",
    justifyContent: "center",
    marginVertical: 45,
    marginTop: 60,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
});
