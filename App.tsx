import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import './global.css';
function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-black text-3xl">App</Text>
    </SafeAreaView>
  );
}

export default App;
