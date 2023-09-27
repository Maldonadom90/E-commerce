import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../constants/colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const Counter = () => {
  const [inputToAdd, setInputToAdd] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable
          style={styles.counterButtons}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.signs}>-</Text>
        </Pressable>
        <Text style={styles.signs}>{counter}</Text>
        <Pressable
          onPress={() => dispatch(increment())}
          style={styles.counterButtons}
        >
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
          value={inputToAdd}
          onChangeText={(value) => setInputToAdd(Number(value))}
        />
        <Pressable
          onPress={() => dispatch(incrementByAmount(inputToAdd))}
          style={styles.add}
        >
          <Text>
            <AntDesign name="enter" size={25} color={'black'} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: colors.tertiary,
    justifyContent: 'space-between',
    height: 40,
  },
  counterButtons: {
    backgroundColor: colors.primary,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  signs: {
    fontSize: 30,
  },
  input: {
    backgroundColor: colors.tertiary,
    width: '80%',
    height: 30,
    borderRadius: 10,
    paddingLeft: 20,
  },
  inputContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 10,
  },
  add: {
    backgroundColor: colors.tertiary,
    borderRadius: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
