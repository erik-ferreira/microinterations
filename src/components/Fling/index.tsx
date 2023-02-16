import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import { styles } from "./styles";

const START = 24;
const SIZE_BOX = 100;
const PADDING_SCREEN = 24;
const LIMIT =
  Dimensions.get("window").width - (START + SIZE_BOX + PADDING_SCREEN);

export function Fling() {
  const position = useSharedValue(START);

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      position.value = withTiming(LIMIT, { duration: 500 });
    });

  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      position.value = withTiming(START, { duration: 500 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector
        gesture={Gesture.Exclusive(flingGestureRight, flingGestureLeft)}
      >
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}
