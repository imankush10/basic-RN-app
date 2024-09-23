import React from 'react';
import {View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HorizontalScrollCard = () => {
  const data = [
    {
      text: 'Card 1',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Card 2',
      image:
        'https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Card 3',
      image:
        'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Card 4',
      image:
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Card 5',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  type Item = {
    text: string;
    image: string;
  };

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}>
          <Text style={styles.cardText}>{item.text}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horizontal Scroll Card</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  flatListContent: {
    marginTop: 14,
  },
  card: {
    height: 224,
    width: 320,
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: 'hidden',
    elevation: 4,
  },
  gradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 36,
    color: 'white',
    fontWeight: '600',
  },
});

export default HorizontalScrollCard;
