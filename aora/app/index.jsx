import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';  // Import useRouter hook for navigation
import CustomButton from '../components/CustomButton';  // Assuming CustomButton is in the components folder

const WelcomeScreen = () => {
  const router = useRouter();  // Use router for redirection

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/images/logo(N).jpg')}  // Replace with the correct image path
          style={styles.profileImage}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>With U</Text>
      <Text style={styles.subtitle}>
        Welcome{'\n'}Sign up to get started. Login if you already have an account.
      </Text>

      {/* Social Media Sign Up Options */}
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <FontAwesome name="google" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="apple" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button using CustomButton */}
      {/* <CustomButton
        title="Continue with Email"
        handlePress={() => router.push("/sign-in")}  // Navigate to sign-in page
        containerStyles="w-full mt-7"
      /> */}
      <CustomButton
  title="Continue with Email"
  handlePress={() => router.push("/sign-up")}
  containerStyles={{ width: '100%', marginTop: 7 }}  // Make sure it's an object or array
/>


      {/* Login Text */}
      <TouchableOpacity onPress={() => router.push("/sign-in")}>  {/* Navigate to login page */}
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    overflow: 'hidden',
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 }, // iOS shadow properties
    shadowOpacity: 0.25, // iOS shadow properties
    shadowRadius: 5, // iOS shadow properties
    elevation: 5, // Android shadow
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 40,
  },
  signUpButton: {
    backgroundColor: '#007BFF', // Blue button
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
    elevation: 3, // Button shadow
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
