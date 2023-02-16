import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";

import { Pan } from "./src/components/Pan";
import { Pinch } from "./src/components/Pinch";
import { Fling } from "./src/components/Fling";
import { Touches } from "./src/components/Touches";
import { Rotation } from "./src/components/Rotation";
import { LongPress } from "./src/components/LongPress";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingTop: StatusBar.currentHeight }}
        contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
      >
        <Text style={styles.title}>Microinterações</Text>

        <Text style={styles.subtitle}>1. Touches</Text>
        <Touches />

        <Text style={styles.subtitle}>2. Long Press</Text>
        <LongPress />

        <Text style={styles.subtitle}>3. Rotation</Text>
        <Rotation />

        <Text style={styles.subtitle}>4. Pinch</Text>
        <Pinch />

        <Text style={styles.subtitle}>5. Pan</Text>
        <Pan />

        <Text style={styles.subtitle}>6. Fling</Text>
        <Fling />
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    marginVertical: 24,
  },

  subtitle: {
    fontSize: 24,
    marginTop: 24,
  },
});
