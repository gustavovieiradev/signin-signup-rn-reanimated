import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BackgroundPng from '../assets/images/background.png';
import LightPng from '../assets/images/light.png';

export function LoginScreen() {
  return (
    <View className='bg-white h-full w-full'>
      <StatusBar style='light' />
      <Image className='h-full w-full absolute' source={BackgroundPng} />

      {/* lights */}
      <View className='flex-row justify-around w-full absolute'>
        <Image className='h-[255] w-[90]' source={LightPng} />
        <Image className='h-[160] w-[65]' source={LightPng} />
      </View>

      {/* title and form */}
      <View className='h-full w-full flex justify-around pt-40 pb-10'>
        {/* Title */}
        <View className='flex items-center'>
          <Text className='text-white font-bold tracking-wider text-5xl'>
            Login
          </Text>
        </View>

        {/* Form */}
        <View className='flex items-center mx-4 space-y-4'>
          <View className='bg-black/5 p-5 rounded-2xl w-full'>
            <TextInput placeholder='Email' placeholderTextColor={'gray'} />
          </View>
          <View className='bg-black/5 p-5 rounded-2xl w-full mb-3'>
            <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
          </View>
          <View className='w-full'>
            <TouchableOpacity className='w-full bg-sky-400 p-3 rounded-2xl mb-3'>
              <Text className='text-xl font-bold text-white text-center'>Login</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-center'>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text className='text-sky-600'>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



    </View>
  );
}