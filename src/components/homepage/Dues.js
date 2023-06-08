import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
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

  const widthArr = ['5px', '200px', '40px', '100px', '100px', '100px'];

  return (
    <View style={styles.container}>
      <Text style={globalStyles.sectionTitle}>Dues</Text>

      <View style={styles.tableContainer}>
        <ScrollView horizontal={true}>
          <DataTable>
            <DataTable.Header style={{ backgroundColor: colors.grayDark }}>
              {tableHead.map((item, index) => (
                <DataTable.Title
                  key={index}
                  style={[styles.tableHead, { width: widthArr[index] }]}
                >
                  <Text
                    style={{
                      color: colors.white,
                      textAlign: 'center',
                    }}
                  >
                    {item}
                  </Text>
                </DataTable.Title>
              ))}
            </DataTable.Header>

            {data.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell numeric style={{ width: widthArr[0] }}>
                  {item.id}
                </DataTable.Cell>
                <DataTable.Cell style={{ width: widthArr[1] }}>
                  {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric style={{ width: widthArr[2] }}>
                  {item.share}
                </DataTable.Cell>
                <DataTable.Cell numeric style={{ width: widthArr[3] }}>
                  {item.dueMonth}
                </DataTable.Cell>
                <DataTable.Cell numeric style={{ width: widthArr[4] }}>
                  {item.dueAmount}
                </DataTable.Cell>
                <DataTable.Cell style={{ width: widthArr[5] }}>
                  {item.phone}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
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
});
