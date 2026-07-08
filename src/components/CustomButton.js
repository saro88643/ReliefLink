import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});