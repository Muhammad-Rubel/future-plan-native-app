import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { global_styles, colors } from '../../assets/css/global_css';

export default function Dues() {
  const table_head = [
    'Sl.',
    'Name',
    'Share',
    'Due Month',
    'Due Amount',
    'Phone',
  ];

  const data = [
    {
      id: 1,
      name: 'Md. Salim Rana',
      phone: '01700000000',
      share: 2,
      due_month: 4,
      due_amount: 1000,
    },
    {
      id: 2,
      name: 'Md. Salim Rana',
      phone: '01700000000',
      share: 2,
      due_month: 4,
      due_amount: 1000,
    },
    {
      id: 3,
      name: 'Md. Salim Rana',
      phone: '01700000000',
      share: 2,
      due_month: 4,
      due_amount: 1000,
    },
    {
      id: 4,
      name: 'Md. Salim Rana',
      phone: '01700000000',
      share: 2,
      due_month: 4,
      due_amount: 1000,
    },
  ];

  return (
    <View>
      <Text style={global_styles.section_title}>Dues</Text>

      <View style={styles.list_container}>
        {/* table head */}
        <View style={styles.table_head}>
          {table_head.map((item, index) => {
            return <Text style={styles.table_head_item}>{item}</Text>;
          })}
        </View>

        {/* table body */}
        {data.map((item, index) => {
          return (
            <View style={styles.table_row}>
              <Text style={{ ...styles.table_row_cell }}>{index + 1}</Text>
              <Text style={{ ...styles.table_row_cell }}>{item.name}</Text>
              <Text style={{ ...styles.table_row_cell }}>{item.share}</Text>
              <Text style={{ ...styles.table_row_cell }}>{item.due_month}</Text>
              <Text style={{ ...styles.table_row_cell }}>
                {item.due_amount}
              </Text>
              <Text style={{ ...styles.table_row_cell }}>{item.phone}</Text>
            </View>
          );
        })}
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
  table_head: {
    flexDirection: 'row',
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
