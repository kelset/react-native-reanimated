import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
// import Interactable from '../../Interactable';
import { FlatListSortable } from './SortFlat/FlatListSortable';
import { DnDTestScreen } from './DnD/DnDTestScreen';

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
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {!this.props.notActualValue ? (
          <DnDTestScreen />
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

  rowMoved = e => {
    const localData = Array.from(this.state.data);
    localData.splice(e.to, 0, localData.splice(e.from, 1)[0]);
    this.setState({
      data: localData,
    });
  };

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
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'space-between',
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
