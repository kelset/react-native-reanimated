import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Interactable from '../../Interactable';

export default class SortableCard extends Component {
  state = {
    order: ['first', 'second', 'third']
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.order.map((item) => (<Interactable.View
          key={item}
          horizontalOnly={true}
          snapPoints={[{ x: 360 }, { x: 0, damping: 0.5 }, { x: -360 }]}>
          <View style={styles.card} >
            <Text style={styles.cardText}>{`${item}`}</Text>
          </View>
        </Interactable.View>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText:{
    color: 'white',
    fontSize: 20,
  }
});
