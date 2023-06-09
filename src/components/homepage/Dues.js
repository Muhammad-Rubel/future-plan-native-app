import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

  const widthArr = [50, 300, 100, 100, 100, 100];

  const cellClasses = [
    styles.tableCellId,
    styles.tableCellName,
    styles.tableCellShare,
    styles.tableCellDueMonth,
    styles.tableCellDueAmount,
    styles.tableCellPhone,
  ];

  return (
    <View style={styles.container}>
      <Text style={globalStyles.sectionTitle}>Dues</Text>

      <View style={styles.tableContainer}>
        {/* <ScrollView horizontal={true} style={styles.scrollContainer}> */}
        {/* table header */}
        <View style={styles.tableHead}>
          {tableHead.map((item, index) => (
            <Text style={(styles.tableHeadCell, cellClasses[index])}>
              {item}
            </Text>
          ))}
        </View>

        {/* table body */}
        {data.map((item, index) => (
          <View key={index} style={styles.tableRows}>
            <Text style={(styles.tableCell, styles.tableCellId)}>
              {item.id}
            </Text>
            <Text style={(styles.tableCell, styles.tableCellName)}>
              {item.name}
            </Text>
            <Text style={(styles.tableCell, styles.tableCellShare)}>
              {item.share}
            </Text>
            <Text style={(styles.tableCell, styles.tableCellDueMonth)}>
              {item.dueMonth}
            </Text>
            <Text style={(styles.tableCell, styles.tableCellDueAmount)}>
              {item.dueAmount}
            </Text>
            <Text style={(styles.tableCell, styles.tableCellPhone)}>
              {item.phone}
            </Text>
          </View>
        ))}
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  tableContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.grayDark,
  },
  scrollContainer: {
    flex: 'none',
  },
  tableHead: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.grayDark,
    paddingHorizontal: 10,
  },
  tableHeadCell: {
    width: 100,
    whiteSpace: 'nowrap',
    paddingHorizontal: 10,
    color: colors.white,
  },
  tableRows: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tableCell: {
    width: 100,
  },
  tableCellId: {
    width: 100,
  },
  tableCellName: {
    width: 400,
  },
  tableCellShare: {
    width: 150,
  },
  tableCellDueMonth: {
    width: 400,
  },
  tableCellDueAmount: {
    width: 400,
  },
  tableCellPhone: {
    width: 400,
  },
  textCenter: {
    textAlign: 'center',
  },
});
