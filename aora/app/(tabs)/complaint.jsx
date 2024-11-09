import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // Import axios

const ComplaintRegistration = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      // Send POST request using axios
      const response = await axios.post('http://localhost:5000/api/complaint', {
        name,
        contact,
        email,
        location,
        description,
      });

      if (response.status === 201) {
        // Handle success (complaint submitted successfully)
        Alert.alert('Complaint Registered', 'Your complaint has been successfully registered.');

        // Reset form fields
        setName('');
        setContact('');
        setEmail('');
        setLocation('');
        setDescription('');
      } else {
        // Handle failure
        Alert.alert('Error', response.data.message || 'There was an error submitting your complaint.');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      Alert.alert('Error', 'There was an error submitting your complaint. Please try again later.');
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Complaint Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Describe the incident"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Complaint</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7ff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#ff4d4f',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ComplaintRegistration;
