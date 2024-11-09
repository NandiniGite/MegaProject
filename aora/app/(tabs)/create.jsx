// import { useState } from "react";
// import { router } from "expo-router";
// import { ResizeMode, Video } from "expo-av";
// import * as DocumentPicker from "expo-document-picker";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   View,
//   Text,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// import { icons } from "../../constants";
// import { createVideoPost } from "../../lib/appwrite";
// import { CustomButton, FormField } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

// const Create = () => {
//   const { user } = useGlobalContext();
//   const [uploading, setUploading] = useState(false);
//   const [form, setForm] = useState({
//     title: "",
//     video: null,
//     thumbnail: null,
//     prompt: "",
//   });

//   const openPicker = async (selectType) => {
//     const result = await DocumentPicker.getDocumentAsync({
//       type:
//         selectType === "image"
//           ? ["image/png", "image/jpg"]
//           : ["video/mp4", "video/gif"],
//     });

//     if (!result.canceled) {
//       if (selectType === "image") {
//         setForm({
//           ...form,
//           thumbnail: result.assets[0],
//         });
//       }

//       if (selectType === "video") {
//         setForm({
//           ...form,
//           video: result.assets[0],
//         });
//       }
//     } else {
//       setTimeout(() => {
//         Alert.alert("Document picked", JSON.stringify(result, null, 2));
//       }, 100);
//     }
//   };

//   const submit = async () => {
//     if (
//       (form.prompt === "") |
//       (form.title === "") |
//       !form.thumbnail |
//       !form.video
//     ) {
//       return Alert.alert("Please provide all fields");
//     }

//     setUploading(true);
//     try {
//       await createVideoPost({
//         ...form,
//         userId: user.$id,
//       });

//       Alert.alert("Success", "Post uploaded successfully");
//       router.push("/home");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setForm({
//         title: "",
//         video: null,
//         thumbnail: null,
//         prompt: "",
//       });

//       setUploading(false);
//     }
//   };

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView className="px-4 my-6">
//         <Text className="text-2xl text-white font-psemibold">Upload Video</Text>

//         <FormField
//           title="Video Title"
//           value={form.title}
//           placeholder="Give your video a catchy title..."
//           handleChangeText={(e) => setForm({ ...form, title: e })}
//           otherStyles="mt-10"
//         />

//         <View className="mt-7 space-y-2">
//           <Text className="text-base text-gray-100 font-pmedium">
//             Upload Video
//           </Text>

//           <TouchableOpacity onPress={() => openPicker("video")}>
//             {form.video ? (
//               <Video
//                 source={{ uri: form.video.uri }}
//                 className="w-full h-64 rounded-2xl"
//                 useNativeControls
//                 resizeMode={ResizeMode.COVER}
//                 isLooping
//               />
//             ) : (
//               <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
//                 <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
//                   <Image
//                     source={icons.upload}
//                     resizeMode="contain"
//                     alt="upload"
//                     className="w-1/2 h-1/2"
//                   />
//                 </View>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         <View className="mt-7 space-y-2">
//           <Text className="text-base text-gray-100 font-pmedium">
//             Thumbnail Image
//           </Text>

//           <TouchableOpacity onPress={() => openPicker("image")}>
//             {form.thumbnail ? (
//               <Image
//                 source={{ uri: form.thumbnail.uri }}
//                 resizeMode="cover"
//                 className="w-full h-64 rounded-2xl"
//               />
//             ) : (
//               <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
//                 <Image
//                   source={icons.upload}
//                   resizeMode="contain"
//                   alt="upload"
//                   className="w-5 h-5"
//                 />
//                 <Text className="text-sm text-gray-100 font-pmedium">
//                   Choose a file
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         <FormField
//           title="AI Prompt"
//           value={form.prompt}
//           placeholder="The AI prompt of your video...."
//           handleChangeText={(e) => setForm({ ...form, prompt: e })}
//           otherStyles="mt-7"
//         />

//         <CustomButton
//           title="Submit & Publish"
//           handlePress={submit}
//           containerStyles="mt-7"
//           isLoading={uploading}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Create;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For social media icons

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/logo(N).jpg')} // Replace with actual image path
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

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>

      {/* Login Text */}
      <TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden', // To ensure the image stays within the circular container
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#888',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
