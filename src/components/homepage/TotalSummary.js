import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { global_styles, colors } from '../../../src/assets/css/global_css';

export default function TotalSummary() {
  return (
    <View>
      <Text style={global_styles.section_title}>Total Summary</Text>

      <View style={styles.list_container}>
        <View style={styles.list_item}>
          <Text style={styles.list_item_name}>Total Month :</Text>
          <Text
            style={{
              ...styles.list_item_amount,
              backgroundColor: colors.blue_primary,
            }}
          >
            14
          </Text>
        </View>

        <View style={styles.list_item}>
          <Text style={styles.list_item_name}>Total Collection (Tk):</Text>
          <Text
            style={{
              ...styles.list_item_amount,
              backgroundColor: colors.violet_primary,
            }}
          >
            809000
          </Text>
        </View>

        <View style={styles.list_item}>
          <Text style={styles.list_item_name}>Total Expense (Tk):</Text>
          <Text
            style={{
              ...styles.list_item_amount,
              backgroundColor: colors.violet_primary,
            }}
          >
            1590.95
          </Text>
        </View>

        <View style={styles.list_item}>
          <Text style={styles.list_item_name}>Balance on Account (Tk):</Text>
          <Text
            style={{
              ...styles.list_item_amount,
              backgroundColor: colors.orange_primary,
            }}
          >
            807409.05
          </Text>
        </View>

        <View style={styles.list_item}>
          <Text style={styles.list_item_name}>Total Dues (Tk):</Text>
          <Text
            style={{
              ...styles.list_item_amount,
              backgroundColor: colors.orange_primary,
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
  list_container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 4,
  },
  list_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  list_item_name: {
    // fontWeight: '500',
  },
  list_item_amount: {
    width: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: 'right',
    color: colors.white,
  },
});
