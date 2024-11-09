// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { Link, useRouter } from 'expo-router';
// import { useGlobalContext } from '../../context/GlobalProvider'; // Ensure GlobalProvider is set up correctly

// const SignInScreen = () => {
//   const { setIsLogged } = useGlobalContext(); // Assuming this function exists in your context
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter(); // For navigation

//   const handleLogin = () => {
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill in all fields');
//     } else {
//       // Authentication logic would go here
//       // If login is successful:
//       setIsLogged(true); // Update global context
//       router.push('/splash/Splash1'); // Redirect to Splash1
//     }
//   };
// const SignInScreen = () => {
//   const { loginUser } = useGlobalContext();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill in all fields');
//     } else {
//       await loginUser(email, password);
//       router.push('/splash/Splash1'); // Redirect to Splash1 after login
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#CDCAFF"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#CDCAFF"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Log In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <Text style={styles.forgotText}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <View style={styles.signUpContainer}>
//         <Text style={styles.signupText}>Don't have an account?</Text>
//         <Link href="/sign-up">
//           <Text style={styles.signUpLink}> Sign Up</Text>
//         </Link>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#051B33',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#CDCAFF',
//     marginBottom: 40,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderColor: '#673AB7',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//     color: '#CDCAFF',
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#673AB7',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotText: {
//     color: '#CDCAFF',
//     marginTop: 10,
//     textDecorationLine: 'underline',
//   },
//   signUpContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#CDCAFF',
//   },
//   signUpLink: {
//     color: '#673AB7',
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
// });

// export default SignInScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider'; // Correct path to GlobalProvider

const SignInScreen = () => {
  const { loginUser } = useGlobalContext(); // Accessing loginUser from the context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // For navigation

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      try {
        await loginUser(email, password);
        router.push('/splash/Splash1'); // Redirect to Splash1 after login
      } catch (error) {
        Alert.alert('Login Error', error.message || 'An error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#CDCAFF"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#CDCAFF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.signUpLink}> Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#051B33',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#CDCAFF',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#673AB7',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: '#CDCAFF',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#673AB7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#CDCAFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#CDCAFF',
  },
  signUpLink: {
    color: '#673AB7',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SignInScreen;
