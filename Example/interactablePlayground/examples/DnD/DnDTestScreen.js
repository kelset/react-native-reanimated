// https://github.com/gyetvan-andras/react-native-dnd-list/blob/master/DnDTestScreen.js

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { DnDList } from './DnDList';

const ROW_COUNT = 15;
const ROW_HEIGHT = 60;

const arrayMove = (arr, oldIndex, newIndex) => {
  if (newIndex >= arr.length) {
    var k = newIndex - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr; // for testing purposes
};

export class DnDTestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.rows = [];
    let size = [];
    for (let i = 0; i < ROW_COUNT; i++) {
      this.rows.push({
        height: ROW_HEIGHT,
        key: i + 1,
        text: `${i + 1}`,
        draggable: true,
        accept: true,
      });
    }
    size = this.rows.map(row => row.height); // .push(40 + (i * 3))
    this.state = { itemSizes: size };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <DnDList
          style={styles.list}
          ref={ref => (this.list = ref)}
          rows={this.rows}
          itemSizes={this.state.itemSizes}
          renderRow={this.renderRow}
          isDraggable={this.isDraggable}
          isAcceptItem={this.isAcceptItem}
          handleDrop={this.handleDrop}
          horizontal={false}
          noDragHandle={false}
          startDrag={this._startDrag}
          stopDrag={this._stopDrag}
        />
      </SafeAreaView>
    );
  }

  isDraggable = item => {
    return item.draggable;
  };

  isAcceptItem = (targetItem, draggedItem) => {
    return targetItem === null ? true : targetItem.accept;
  };

  renderRow = (item, idx) => {
    return (
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <Text style={[styles.cardText, { width: 25 }]}>{idx}</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>{item.text}</Text>
          <Text style={styles.cardText}>Y</Text>
        </View>
      </View>
    );
  };

  handleDrop = (from, to) => {
    this.rows = arrayMove(this.rows, from, to);
    let size = this.rows.map(row => row.height); // .push(40 + (i * 3))
    this.setState({ itemSizes: size });
    return this.rows;
  };

  _startDrag = () => {};

  _stopDrag = () => {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'coral',
  },
  list: {
    marginHorizontal: 10,
    height: 70,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    // backgroundColor: 'gold',
  },
  switchButton: {
    flex: 0,
    margin: 10,
    // backgroundColor: 'blue'
  },
  card: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
  },
});
