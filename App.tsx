import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import React from 'react';
import './global.css';
import FlatCard from './src/components/FlatCard';
import HorizontalScrollCard from './src/components/HorizontalScrollCard';
import FancyCard from './src/components/FancyCard';
import places from './assets/places';
import CardWithButton from './src/components/CardWithButton';
import ContactList from './src/components/ContactList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-neutral-900">
      <StatusBar barStyle="light-content" backgroundColor="#171717" />
      <ScrollView>
        <FlatCard />
        <HorizontalScrollCard />
        <Text className="text-3xl font-bold text-white text-center mt-4">
          Trending places
        </Text>
        {places.map(place => (
          <FancyCard key={place.name} placeObj={place} />
        ))}
        <Text className="text-3xl font-bold text-white text-center mt-4">Blog Cards</Text>
        <CardWithButton />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
