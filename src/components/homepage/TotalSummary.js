import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles, colors } from '../../../src/assets/css/globalCss';

export default function TotalSummary() {
  return (
    <View>
      <Text style={globalStyles.sectionTitle}>Total Summary</Text>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.listItemName}>Total Month :</Text>
          <Text
            style={{
              ...styles.listItemAmount,
              backgroundColor: colors.bluePrimary,
            }}
          >
            14
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listItemName}>Total Collection (Tk):</Text>
          <Text
            style={{
              ...styles.listItemAmount,
              backgroundColor: colors.violetPrimary,
            }}
          >
            809000
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listItemName}>Total Expense (Tk):</Text>
          <Text
            style={{
              ...styles.listItemAmount,
              backgroundColor: colors.violetPrimary,
            }}
          >
            1590.95
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listItemName}>Balance on Account (Tk):</Text>
          <Text
            style={{
              ...styles.listItemAmount,
              backgroundColor: colors.orangePrimary,
            }}
          >
            807409.05
          </Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listItemName}>Total Dues (Tk):</Text>
          <Text
            style={{
              ...styles.listItemAmount,
              backgroundColor: colors.orangePrimary,
            }}
          >
            91000
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  listItemName: {
    // fontWeight: '500',
  },
  listItemAmount: {
    width: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: 'right',
    color: colors.white,
  },
});
