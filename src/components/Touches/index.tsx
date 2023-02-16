import { View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./styles";

export function Touches() {
  const size = useSharedValue(100);
  const doubleTapActive = useSharedValue<0 | 1>(0);

  function onPressIn() {
    size.value = withSpring(150);
  }

  function onPressOut() {
    size.value = withSpring(100);
  }

  const onGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      doubleTapActive.value = withTiming(doubleTapActive.value === 0 ? 1 : 0, {
        duration: 500,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
    backgroundColor: interpolateColor(
      doubleTapActive.value,
      [0, 1],
      ["#7159c1", "#bf5a07"]
    ),
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={onGesture}>
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </Pressable>
      </GestureDetector>
    </View>
  );
}
