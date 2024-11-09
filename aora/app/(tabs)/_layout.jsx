// import { StatusBar } from "expo-status-bar";
// import { Redirect, Tabs } from "expo-router";
// import { Image, Text, View } from "react-native";

// import { icons } from "../../constants";
// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View className="flex items-center justify-center gap-2">
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text
//         className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
//         style={{ color: color }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const TabLayout = () => {
//   const { loading, isLogged } = useGlobalContext();

//   if (!loading && !isLogged) return <Redirect href="/sign-in" />;

//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: "#FFA001",
//           tabBarInactiveTintColor: "#CDCDE0",
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: "#161622",
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//             height: 84,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.home}
//                 color={color}
//                 name="Home"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="bookmark"
//           options={{
//             title: "Bookmark",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.bookmark}
//                 color={color}
//                 name="Bookmark"
//                 focused={focused}
//               />
//             ),
//           }}
//         />

//         <Tabs.Screen
//           name="create"
//           options={{
//             title: "Create",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.plus}
//                 color={color}
//                 name="Create"
//                 focused={focused}
//               />
//             ),
//           }}
//         />

//         {/* Add the SecondPage tab */}
//         <Tabs.Screen
//           name="main"
//           options={{
//             title: "main",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.sos}  // Replace with your SOS icon
//                 color={color}
//                 name="SOS"
//                 focused={focused}
//               />
//             ),
//           }}
//         />

//       </Tabs>

//       <Loader isLoading={loading} />
//       <StatusBar backgroundColor="#161622" style="light" />
//     </>
//   );
// };

// export default TabLayout;

import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";
import { Loader } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

// Tab icon component
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

// Layout Component for Tabs
const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="complaint"
          options={{
            title: "Complaint",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.sos} color={color} name="Complaint" focused={focused} />
            ),
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;

