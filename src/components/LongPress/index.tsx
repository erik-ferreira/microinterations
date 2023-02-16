import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./styles";

export function LongPress() {
  const size = useSharedValue(100);

  const longPress = Gesture.LongPress()
    .onTouchesDown(() => {
      size.value = withTiming(200, { duration: 600 });
    })
    .onEnd((event, success) => {
      if (success) {
        console.log(`Duração ${event.duration} ms.`);
        size.value = withTiming(100, { duration: 600 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={longPress}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}
