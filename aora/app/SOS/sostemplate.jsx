import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SOSTemplate = () => {
  const [customMessage, setCustomMessage] = useState('');

  const predefinedTemplates = [
    "Help! I'm in danger, please send help immediately.",
    "I'm feeling unsafe, contact the authorities now!",
    "I need assistance, please come to my location.",
    "Emergency! Please reach out to me immediately.",
    "SOS! I need help at my current location.",
  ];

  const sendSOSMessage = (message) => {
    // Placeholder function for sending the message
    alert(`SOS message sent: ${message}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose from the templates below:</Text>

      {predefinedTemplates.map((template, index) => (
        <TouchableOpacity
          key={index}
          style={styles.templateButton}
          onPress={() => sendSOSMessage(template)}
        >
          <Text style={styles.templateText}>{template}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.customMessageTitle}>Or write your own message:</Text>

      <TextInput
        style={styles.customMessageInput}
        placeholder="Enter custom SOS message"
        placeholderTextColor="#A0A0A0"
        multiline
        value={customMessage}
        onChangeText={setCustomMessage}
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => sendSOSMessage(customMessage)}
        disabled={!customMessage.trim()}
      >
        <Text style={styles.sendButtonText}>Send Custom SOS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F4F4FF',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  templateButton: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  templateText: {
    fontSize: 16,
    color: '#333',
  },
  customMessageTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
  customMessageInput: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#FF4D4D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SOSTemplate;
