import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
// import Interactable from '../../Interactable';
import { FlatListSortable } from './SortFlat/FlatListSortable';
import { DnDList } from './DnD/DnDList';

const ROW_HEIGHT = 80;

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

export default class SortableCard extends React.Component {
  state = {
    data: [
      'James',
      'Michael',
      'Harold',
      'Chloe',
      'Bob',
      'George',
      'Samantha',
      'Jenny',
      'Sharon',
      'Mark',
      'Carl',
      'TJ',
      'Julia',
      'Soi',
      'Andrew',
      'Tom',
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {!this.props.notActualValue ? (
          <DnDList
            style={styles.list}
            rows={this.state.data}
            itemHeight={ROW_HEIGHT}
            renderRow={this.renderRow}
            handleDrop={this.handleDrop}
          />
        ) : (
          <FlatListSortable
            onRowMoved={this.rowMoved}
            data={this.state.data}
            renderItem={this.renderItem}
            style={styles.list}
          />
        )}
      </SafeAreaView>
    );
  }

  renderRow = (item, idx) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginVertical: 10,
        }}>
        <Text style={[styles.cardText, { width: 25, alignSelf: 'center' }]}>
          {idx}
        </Text>
        <View style={[styles.card, { paddingRight: 80 }]}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={this.onButtonPress}>
            <Text style={{ textAlign: 'center' }}>Button</Text>
          </TouchableOpacity>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      </View>
    );
  };

  handleDrop = (from, to) => {
    const localData = arrayMove(Array.from(this.state.data), from, to);
    this.setState({
      data: localData,
    });
  };

  rowMoved = ({ from, to }) => {
    const localData = Array.from(this.state.data);
    this.setState({
      data: arrayMove(localData, from, to),
    });
  };

  renderItem = ({ item, index }) => (
    // <Interactable.View key={item} snapPoints={[{ x: 0, damping: 0.5 }]}>
    <TouchableOpacity style={styles.item}>
      <TouchableOpacity style={styles.cardButton} onPress={this.onButtonPress}>
        <Text style={{ textAlign: 'center' }}>Button</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{`${item}`}</Text>
    </TouchableOpacity>
    // </Interactable.View>
  );

  onCardPress = () => {
    // alert('Card was pressed');
  };

  onButtonPress = () => {
    // alert('Card was pressed');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    // backgroundColor: 'red',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  },
  card: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
  },
  cardText: {
    color: 'black',
    fontSize: 20,
  },
  cardButton: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'coral',
  },
});
