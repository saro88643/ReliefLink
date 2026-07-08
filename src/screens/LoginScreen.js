import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🛟</Text>

      <Text style={styles.title}>ReliefLink</Text>

      <Text style={styles.subtitle}>
        Stay Connected Without Internet
      </Text>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Login"
        onPress={() => navigation.navigate('Dashboard')}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F5F7FA',
  },

  logo: {
    fontSize: 70,
    textAlign: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E53935',
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 35,
  },

  register: {
    marginTop: 25,
    textAlign: 'center',
    color: '#E53935',
    fontWeight: 'bold',
  },

});