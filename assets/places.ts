const places = [
  {
    uri: 'https://www.thegrandindianroute.com/wp-content/uploads/2024/03/Untitled-design-12.jpg',
    name: 'Hawa Mahal',
    distance: '12 mins away',
    place: 'Jaipur',
    description:
      'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace.',
  },
  {
    uri: 'https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg',
    name: 'Taj Mahal',
    distance: '3 hours away',
    place: 'Agra',
    description:
      'The Taj Mahal is a mausoleum located in Agra, Uttar Pradesh, India. It is an ivory-white marble building, with symmetrical gardens surrounding it.',
  },
];

export type PlaceType = {
  uri: string;
  name: string;
  distance: string;
  place: string;
  description: string;
};

export default places;
