import { Slot } from 'expo-router';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function HomeLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Layout</Text>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
