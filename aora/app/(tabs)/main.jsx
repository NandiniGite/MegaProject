import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const SecondPage = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search Location" placeholderTextColor="#A0A0CC" style={styles.searchInput} />
      </View>

      {/* Button Grid */}
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/images/safety.jpg')} // Adjusted path
            style={styles.icon}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.gridButton}>
            <Text style={styles.gridText}>Safety Tips</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/images/location.jpg')} // Adjusted path
            style={styles.icon}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.gridButton}>
            <Text style={styles.gridText}>Share Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/images/connect.jpg')} // Adjusted path
            style={styles.icon}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.gridButton}>
            <Text style={styles.gridText}>Nearby Users</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={require('../../assets/images/complaint.jpg')} // Adjusted path
            style={styles.icon}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigation.navigate('ComplaintRegistration')} // Navigate to ComplaintRegistration
          >
            <Text style={styles.gridText}>Police Station</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SOS Button */}
      <TouchableOpacity
        style={styles.sosButton}
        onPress={() => {
          console.log('SOS Button pressed'); // Log for debugging
          navigation.navigate('SOSCall'); // Navigate to SOSCall
        }}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4FF',
    padding: 20,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: '#4F4DB0',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  gridButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridText: {
    color: '#4F4DB0',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 5,
  },
  sosButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SecondPage;
