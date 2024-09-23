import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <SafeAreaView className="w-screen items-center px-4 py-2">
      <Text className="text-white text-2xl font-semibold">FlatCard</Text>
      <View className="flex-row mt-3 w-full gap-4 justify-center">
        <TouchableOpacity onPress={() => Alert.alert('Red')}>
          <View className="bg-red-600 rounded-lg h-32 w-32 items-center justify-center">
            <Text className="text-3xl text-white font-semibold">Red</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Green')}>
          <View className="bg-green-500 rounded-lg h-32 w-32 items-center justify-center">
            <Text className="text-3xl text-white font-semibold">Green</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Blue')}>
          <View className="bg-blue-500 rounded-lg h-32 w-32 items-center justify-center">
            <Text className="text-3xl text-white font-semibold">Blue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlatCard;
