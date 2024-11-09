import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const EmergencyCallingScreen = () => {
  const [countdown, setCountdown] = useState(3); // Start countdown from 3 seconds
  const [expandAnimation] = useState(new Animated.Value(0)); // Animation for expanding circle

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Start the expanding circle animation when the component mounts
  useEffect(() => {
    Animated.timing(expandAnimation, {
      toValue: 1,
      duration: 5000, // Time for full expansion (in milliseconds)
      useNativeDriver: false, // We can't use native driver for direct style changes like width and height
    }).start();
  }, []);

  // Interpolate the animation value to scale the circle
  const circleSize = expandAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [180, 1000], // The circle starts at 180 and expands to 1000
  });

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Connecting...</Text>

      {/* Countdown Timer with Red Circle Border */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{countdown < 10 ? `0${countdown}` : countdown}</Text>
      </View>

      {/* Expanding Circular Border */}
      <Animated.View
        style={[
          styles.expandingCircle,
          {
            width: circleSize,
            height: circleSize,
            marginLeft: -500, // Adjust this based on the final size you want
            marginTop: -500, // Adjust this based on the final size you want
          },
        ]}
      />

      {/* Emergency Contacts Icons */}
      <View style={styles.contactsContainer}>
        {[ 
          { name: 'Sister', position: { top: '20%', left: '25%' } },
          { name: 'Dad', position: { top: '20%', right: '25%' } },
          { name: 'Mom', position: { bottom: '20%', left: '20%' } },
          { name: 'Albert', position: { bottom: '20%', right: '20%' } }
        ].map((contact, index) => (
          <View key={index} style={[styles.contactIconContainer, contact.position]}>
            <FontAwesome5 name="user" size={30} color="#333" />
            <View style={styles.contactNameContainer}>
              <Text style={styles.contactName}>{contact.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFDAB9', // Solid background color
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  timerContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 60, // Increased margin to create more spacing
    borderWidth: 3, // Thin border line
    borderColor: '#FF0000', // Red color for the border
  },
  timerText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  expandingCircle: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#FF0000', // Red color for expanding circle
    borderRadius: 500, // Ensure the circle is fully round
    top: '50%',
    left: '50%',
  },
  contactsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIconContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  contactNameContainer: {
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#333',
    marginTop: 10, // Increased margin between the icon and the contact name
  },
  contactName: {
    fontSize: 14,
    color: '#333',
  },
});

export default EmergencyCallingScreen;
