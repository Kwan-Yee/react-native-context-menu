import { StyleSheet, View } from 'react-native';
import { Target } from './Target';

export default function App() {
  return (
    <View style={styles.container}>
      <Target />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
