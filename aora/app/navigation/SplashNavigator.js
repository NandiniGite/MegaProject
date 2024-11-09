// import React, { useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useGlobalContext } from '../../context/GlobalProvider';  // Ensure you are using context for global state

// const SplashNavigator = () => {
//   const { isLogged } = useGlobalContext();  // Assuming you have an "isLogged" state in your global context
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Simulate a loading process (like fetching auth state)
//     const timer = setTimeout(() => {
//       if (isLogged) {
//         navigation.replace('Splash1');  // If logged in, go to Splash1
//       } else {
//         navigation.replace('SignIn');  // Otherwise, go to Login
//       }
//     }, 2000);  // Adjust timer as needed

//     return () => clearTimeout(timer);
//   }, [isLogged, navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Loading...</Text>
//       <ActivityIndicator size="large" color="#673AB7" />
//     </View>
//   );
// };

// export default SplashNavigator;


// import { Stack } from 'expo-router';
// import Splash1 from './Splash1';
// import Splash2 from './Splash2';
// import Splash3 from './Splash3';

// const SplashNavigator = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="Splash1" component={Splash1} options={{ headerShown: false }} />
//       <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }} />
//       <Stack.Screen name="Splash3" component={Splash3} options={{ headerShown: false }} />
//     </Stack>
//   );
// };

// export default SplashNavigator;

