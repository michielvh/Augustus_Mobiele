import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Table, Rows, Row } from 'react-native-table-component';

export default class tableView extends Component {
  render() {
    const tableHead = ['You owe', 'You are owed'];
    const tableData = [
      ['50', '150'],
    ];
  
    return (
      <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} style={styles.row} textStyle={styles.text} />
      </Table>
      
    );
  }
}
 
const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
});
