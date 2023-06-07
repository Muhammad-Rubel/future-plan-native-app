import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { globalStyles, colors } from '../../assets/css/globalCss';

export default function Dues() {
  const tableHead = [
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
      share: 2,
      dueMonth: 4,
      dueAmount: 1000,
      phone: '01700000000',
    },
    {
      id: 2,
      name: 'Md. Salim Rana',
      share: 2,
      dueMonth: 4,
      dueAmount: 1000,
      phone: '01700000000',
    },
    {
      id: 3,
      name: 'Md. Salim Rana',
      share: 2,
      dueMonth: 4,
      dueAmount: 1000,
      phone: '01700000000',
    },
    {
      id: 4,
      name: 'Md. Salim Rana',
      share: 2,
      dueMonth: 4,
      dueAmount: 1000,
      phone: '01700000000',
    },
  ];

  const widthArr = [30, 150, 40, 100, 100, 100];

  return (
    <View style={styles.container}>
      <Text style={globalStyles.sectionTitle}>Dues</Text>

      <View style={styles.listContainer}>
        <ScrollView horizontal={true}>
          <Table>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={[styles.tableHead]}
            />

            {data.map((item, index) => (
              <Row
                key={item.id}
                data={Object.values(item)}
                widthArr={widthArr}
                style={[
                  styles.tableRow,
                  index % 2 !== 0 && { backgroundColor: '#f2f2f2' },
                  data?.[index]?.dueMonth >= 3 && {
                    color: 'red',
                  },
                ]}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  listContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.grayDark,
  },
  tableHead: {
    textAlign: 'center',
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: colors.grayDark,
    color: colors.white,
  },
  tableRow: {
    textAlign: 'center',
    height: 30,
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
  tableCol1: {
    width: 30,
  },
});
