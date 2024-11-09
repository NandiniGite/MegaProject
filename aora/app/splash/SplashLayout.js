import { Stack, Redirect } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';
import Splash1 from './Splash1';
import Splash2 from './Splash2';
import Splash3 from './Splash3';

const SplashLayout = () => {
  const { showSplash, loading } = useGlobalContext();

  // Redirect to home when the splash screens are done
  if (!showSplash) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen name="Splash1" component={Splash1} options={{ headerShown: false }} />
        <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }} />
        <Stack.Screen name="Splash3" component={Splash3} options={{ headerShown: false }} />
      </Stack>

      {/* Show loader if loading is true */}
      {/* If you have a loader component, show it here */}
      {/* <Loader isLoading={loading} /> */}
    </>
  );
};

export default SplashLayout;
