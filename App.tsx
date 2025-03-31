import { StatusBar } from "react-native";
import { Loading } from "@components/Loading";
import { config } from "./config/gluestack-ui.config";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { SignIn } from "@screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
