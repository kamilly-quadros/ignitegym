import BackgroundImg from "@assets/background.png";
import { VStack, Image } from "@gluestack-ui/themed";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        w="$full"
        h={624}
        source={BackgroundImg}
        alt="Pessoas treinando"
        defaultSource={BackgroundImg}
        position="absolute"
      />
    </VStack>
  );
}
