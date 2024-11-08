import { useSubscription } from "@lawallet/react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { events } = useSubscription({
    filters: [
      {
        authors: [
          "3748b5a01edca05ae9f7dd434679eb768193aa27262024ae89add65cdccc1965",
        ],
      },
    ],
    options: {},
    enabled: true,
  });

  console.log(events);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );
}
