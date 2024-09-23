import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';

function openLink(url: string) {
  Linking.openURL(url);
}

const CardWithButton = () => {
  return (
    <View className=" bg-white rounded-lg m-4 py-4 flex-1">
      <Text className="text-black text-2xl text-center font-bold">
        Micro SD Cards
      </Text>
      <Image
        className="object-cover h-72 mt-2"
        source={{
          uri: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <View className="px-4">
        <Text
          className="text-black text-lg font-semibold my-2"
          numberOfLines={2}>
          Micro SD cards are a type of removable storage used to store data.
          They are widely used in a lot of devices. Cameras specially have huge
          ecosystem revolving around SD cards, but now modern cameras also
          support wifi connectivity directly.
        </Text>
        <View className="flex-row justify-around">
          <TouchableOpacity className="bg-black rounded-lg p-2 w-28 items-center">
            <Text
              className="text-white text-lg font-semibold"
              onPress={() =>
                openLink('https://ewenbell.com/blog/SD_Cards_Explained')
              }>
              Read more
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-black rounded-lg p-2 w-28 items-center"
            onPress={() => openLink('https://instagram.com/imankush__10')}>
            <Text className="text-white text-lg font-semibold">Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardWithButton;
