import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import Interactable from '../../Interactable';
import { FlatListSortable } from './utils/FlatListSortable';

let DATA = [
  'James',
  'Michael',
  'Harold',
  'Chloe',
  'Bob',
  'George',
  'Samantha',
  'Jenny',
  'Sharon',
];

export default class SortableCard extends React.Component {
  // state = {
  //   order: ['first', 'second', 'third'],
  // };

  render() {
    return (
      <View style={styles.container}>
        <FlatListSortable
          onRowMoved={e => {
            DATA.splice(e.to, 0, DATA.splice(e.from, 1)[0]);
          }}
          data={DATA}
          renderItem={this.renderItem}
          style={styles.list}
        />
      </View>
    );
  }

  renderItem = ({ item, index }) => (
    // <Interactable.View key={item} snapPoints={[{ x: 0, damping: 0.5 }]}>
    <TouchableOpacity style={styles.card}>
      <TouchableOpacity style={styles.cardButton} onPress={this.onButtonPress}>
        <Text style={{ textAlign: 'center' }}>Button</Text>
      </TouchableOpacity>
      <Text style={styles.cardText}>{`${item}`}</Text>
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
    backgroundColor: 'red',
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardText: {
    color: 'white',
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
