
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Use Link for navigation

const Splash1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/safety.jpg')} style={styles.image} />
      <Text style={styles.title}>We are all about Women's Safety</Text>
      <Text style={styles.description}>
        Stay mindful with us... This app is designed to ensure your safety at all times.
      </Text>

      {/* Navigate to Splash2 using Link */}
      <Link href="/splash/Splash2" style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </Link>

      {/* Skip button to navigate directly to Home */}
      <Link href="/(tabs)/home" style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#F0F0FF' },
  image: { width: 200, height: 200, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  skipButton: { position: 'absolute', bottom: 40, left: 20 },
  skipText: { color: '#666', fontSize: 18 },
  nextButton: { position: 'absolute', bottom: 40, right: 20 },
  nextText: { color: '#666', fontSize: 18 },
});

export default Splash1;
