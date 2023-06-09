import { Slot } from 'expo-router';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { globalStyles, colors } from '../src/assets/css/globalCss';
import Header from '../src/components/Header';
import StoreContextLayout from '../store/useStore';

// https://future-plan-api.srwebstudio.com/api

export default function HomeLayout() {
  return (
    <StoreContextLayout>
      <SafeAreaView style={styles.container}>
        <Header></Header>

        <View style={styles.contentContainer}>
          <Slot />
        </View>
      </SafeAreaView>
    </StoreContextLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.grayDark,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 75,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
