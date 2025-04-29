import { AuthRoutes } from "./auth.routes";
import { Box } from "@gluestack-ui/themed";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
