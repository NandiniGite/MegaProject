import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SosScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Are you in an emergency?</Text>
        <Image
          source={require('../../assets/images/sos.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.subText}>
        Press the SOS button, your live location will be shared with the nearest help centre and your emergency contacts
      </Text>

      {/* SOS Button */}
      <View style={styles.sosButtonContainer}>
      <TouchableOpacity
      style={styles.sosButton}
       activeOpacity={0.7}
       onPress={() => router.push('/soscontacts')}
      >
          <Text style={styles.sosText}>SOS</Text>
          <Text style={styles.pressText}>Press 3 second</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Options */}
      <Text style={styles.emergencyText}>What's your emergency?</Text>
      <View style={styles.emergencyOptions}>
        {[
          { icon: 'heartbeat', label: 'Medical' },
          { icon: 'fire', label: 'Fire' },
          { icon: 'leaf', label: 'Natural disaster' },
          { icon: 'car-crash', label: 'Accident' },
          { icon: 'user-shield', label: 'Violence' },
          { icon: 'life-ring', label: 'Rescue' }
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.emergencyButton}
            onPress={() => console.log(item.label)}
          >
            <FontAwesome5 name={item.icon} size={16} color="black" />
            <Text style={styles.emergencyLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30', // Red color for the text
  },
  image: {
    width: 120, // Increased image size
    height: 120,
    resizeMode: 'contain',
  },
  subText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  sosButtonContainer: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    paddingVertical: 40,
    alignItems: 'center',
    marginBottom: 30,
  },
  sosButton: {
    width: 160,
    height: 160,
    backgroundColor: '#FF3B30',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15, // Increased shadow radius
    elevation: 15, // Increased elevation for a stronger shadow effect
  },
  sosText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pressText: {
    color: '#FFFFFF',
    marginTop: 5,
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  emergencyOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#E0F7E9',
    borderRadius: 20,
    margin: 5,
  },
  emergencyLabel: {
    marginLeft: 8,
    color: '#333333',
  },
});

export default SosScreen;
