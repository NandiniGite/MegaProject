// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import Splash1 from '../splash/Splash1.js';
// import Splash2 from '../splash/Splash2.js';
// import Splash3 from '../splash/Splash3.js';
// import Home from '../(tabs)/main.jsx';
// import SignUp from '../(auth)/sign-up.jsx';
// import SignIn from '../(auth)/sign-in.jsx';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash1">
//         <Stack.Screen
//           name="Splash1"
//           component={Splash1}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Splash2"
//           component={Splash2}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Splash3"
//           component={Splash3}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SignIn"
//           component={SignIn}
//           options={{ headerShown: true, title: 'Login' }}
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{ headerShown: true, title: 'Sign Up' }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import { Stack } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';
import Home from '../(tabs)/main'; // Path to Home screen

// Import SplashLayout from splash folder
import SplashLayout from '../splash/SplashLayout';

const AppNavigator = () => {
  const { showSplash } = useGlobalContext();

  return (
    <Stack>
      {/* Show SplashLayout if showSplash is true, otherwise show Home */}
      {showSplash ? (
        <Stack.Screen 
          name="splash"
          component={SplashLayout}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
      )}
    </Stack>
  );
};

export default AppNavigator;



