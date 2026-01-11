import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
  },
});

export const ContextMenuListSectionSeparator = () => {
  return <View style={styles.separator} />;
};
