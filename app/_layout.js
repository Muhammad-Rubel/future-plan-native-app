import { Slot } from 'expo-router';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/Header';
import StoreContextLayout from '../store/useStore';
import { global_styles, colors } from '../src/assets/css/global_css';

export default function HomeLayout() {
  return (
    <StoreContextLayout>
      <SafeAreaView style={styles.container}>
        <Header></Header>

        <View style={styles.content_container}>
          <Slot />
        </View>
      </SafeAreaView>
    </StoreContextLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.gray_dark,
  },
  content_container: {
    flex: 1,
    paddingTop: 75,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
