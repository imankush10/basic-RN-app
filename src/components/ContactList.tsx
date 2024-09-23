import {View, Text, Image} from 'react-native';
import React from 'react';

const contacts = [
  {
    uid: 1,
    name: 'Himanshi Gupta',
    status: 'Making your Life smooth',
    imageUrl: 'https://randomuser.me/api/portraits/women/61.jpg',
  },
  {
    uid: 2,
    name: 'Parv Joshi',
    status: 'Research paper writer',
    imageUrl: 'https://randomuser.me/api/portraits/men/16.jpg',
  },
  {
    uid: 3,
    name: 'Gurlin Kaur',
    status: 'Software Developer',
    imageUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
  {
    uid: 4,
    name: 'Manav Singh',
    status: 'Data Scientist',
    imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
];

const ContactList = () => {
  return (
    <View>
      <Text className="text-3xl font-bold text-white text-center my-4">
        Contacts
      </Text>
      {contacts.map(contact => {
        return (
          <View
            key={contact.uid}
            className="flex-row gap-3 items-center mb-4 rounded-md p-4 bg-neutral-800">
            <Image
              source={{uri: contact.imageUrl}}
              className="h-16 w-16 rounded-full"
            />
            <View>
              <Text className="text-white text-2xl">{contact.name}</Text>
              <Text className="text-white text-sm">{contact.status}</Text>
            </View>
          </View>
        );
      })}
      <Text>ContactList</Text>
    </View>
  );
};

export default ContactList;
