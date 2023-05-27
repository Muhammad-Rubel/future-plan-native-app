import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useContext } from 'react';
import { global_styles, colors } from '../src/assets/css/global_css';
import TotalSummary from '../src/components/homepage/TotalSummary';

export default function Home() {
  return (
    <View style={styles.container}>
      <TotalSummary></TotalSummary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_medium,
    ...global_styles.padding,
  },
});
