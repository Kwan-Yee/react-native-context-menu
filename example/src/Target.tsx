import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  target: {
    height: 36,
    width: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    borderCurve: 'continuous',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export function Target() {
  return (
    <Pressable style={styles.target}>
      <Text style={styles.text}>Target</Text>
    </Pressable>
  );
}
