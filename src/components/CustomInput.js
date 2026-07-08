import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomInput(props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#888"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginTop: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});