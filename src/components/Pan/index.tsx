import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./styles";

export function Pan() {
  const positionX = useSharedValue(1);

  const panGesture = Gesture.Pan().onUpdate((event) => {
    positionX.value = event.translationX;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positionX.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}
