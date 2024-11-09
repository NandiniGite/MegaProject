import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';  // Adjust the path if necessary

const SignUpScreen = () => {
  const { registerUser } = useGlobalContext(); // Using the method from context
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Frontend validation
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    try {
      await registerUser(firstName, lastName, email, password);
      Alert.alert('Success', 'Account created successfully');
    } catch (error) {
      Alert.alert('Error', error.message || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>With U</Text>
      <Text style={styles.subtitle}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#888"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#888"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/sign-in" style={styles.loginLink}>
        <Text>Already have an account? <Text style={styles.linkText}>Log In</Text></Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCAFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    color: '#051B33',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#673AB7',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#673AB7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#051B33',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#673AB7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    fontSize: 16,
    color: '#051B33',
  },
  linkText: {
    color: '#673AB7',
  },
});

export default SignUpScreen;
