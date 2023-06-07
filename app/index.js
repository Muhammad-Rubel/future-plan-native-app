import React from 'react';
import { View, StyleSheet } from 'react-native';
import { globalStyles, colors } from '../src/assets/css/globalCss';
import TotalSummary from '../src/components/homepage/TotalSummary';
import Dues from '../src/components/homepage/Dues';

export default function Home() {
  return (
    <View style={styles.container}>
      <TotalSummary></TotalSummary>

      <Dues></Dues>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayMedium,
    ...globalStyles.padding,
  },
});
