import {Image, Text, View} from 'react-native';
import React from 'react';
import {PlaceType} from '../../assets/places';

const FancyCard = ({placeObj}: {placeObj: PlaceType}) => {
  return (
    <View className="bg-neutral-200 rounded-lg m-4 pb-6">
      <View>
        <Image
          source={{
            uri: placeObj.uri,
          }}
          className="h-72 object-cover rounded-t-lg"
        />
        <View className="px-4 pt-4">
          <View className="flex-row justify-between items-end">
            <Text className="font-bold text-3xl text-black">
              {placeObj.name}
            </Text>
            <Text className="font-bold text-neutral-700">
              {placeObj.distance}
            </Text>
          </View>
          <Text className="text-neutral-700 text-lg font-semibold -mt-1">
            {placeObj.place}
          </Text>
          <Text className="mt-4 font-bold text-black text-[15px]">
            {placeObj.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;
