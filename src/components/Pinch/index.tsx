import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./styles";

export function Pinch() {
  const scale = useSharedValue(1);

  const rotationGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = 1;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}
