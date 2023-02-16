# Microinterações

## O que é?

São os detalhes funcionais e interativos de um produto que podem tornar o envolvimento com o produto mais fácil e prazeroso.

## Tipos

Há microinterações sonora, visual e tátil. Todas podem ser utilizadas juntas.

### Exemplo

```js
import { View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { styles } from "./styles";

export function Touches() {
  const size = useSharedValue(100);

  function onPressIn() {
    size.value = withSpring(150);
  }

  function onPressOut() {
    size.value = withSpring(100);
  }

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </Pressable>
    </View>
  );
}

/*
1. <Animated.View style={[styles.box, animatedStyle]} /> 
  -> A View não pode ser uma normal do react native, e sim uma do react native reanimated

2. size.value = withSpring(150);
  -> Vai fazer um animação para que a mudança de tamanho não seja tão brusca
*/
```
