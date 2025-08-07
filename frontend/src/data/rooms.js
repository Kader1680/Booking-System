// src/data/rooms.js

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    description: "Spacious room with modern design and ocean view.",
    price: 120,
    rating: 4.5,
    imageUrl: "https://expressinnindia.com/wp-content/uploads/2024/07/Freesia-God-23.jpg",
    capacity: 2,
    size: "35 m²",
    bedType: "King",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"], 
    availability: false, 

  },
  {
    id: 2,
    title: "Standard Room",
    description: "Comfortable room with essential amenities.",
    price: 90,
    rating: 4.0,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiV-zO8KiAssWgdTgs5duPvyZJ-wFt_R9Kg&s",
    availability: true, 
    capacity: 2,
  size: "12 m²",
  bedType: "King",
  amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"]
  },
  {
    id: 3,
    title: "Executive Suite",
    description: "Luxury suite with separate living area and king-size bed.",
    price: 180,
    rating: 4.8,
    availability: true, 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTHge5P5Eb7jCM775osktfhiexAY203rx4aTA2kto02Rl7Bsh-hLhAAyvhq0l19C9jIw&usqp=CAU",
    capacity: 2,
  size: "45 m²",
  bedType: "King",
  amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"]
  },
  {
    id: 4,
    title: "Luxury King Room",
    description: "King-sized luxury and scenic views for your comfort.",
    price: 200,
    rating: 4.9,
    availability: true, 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4PCDfhSVElt_a7mgbeo6xnMr4CtvjG0wEA&s",
    capacity: 2,
  size: "89 m²",
  bedType: "King",
  amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"]
  },
  {
    id: 5,
    title: "Economy Room",
    description: "Affordable comfort with essential amenities.",
    price: 70,
    rating: 3.9,
    availability: false, 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSto1fYtPGgyPoeBZRvrUM3akfE7WUBINX55w&s",
    capacity: 2,
  size: "58 m²",
  bedType: "King",
  amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"]
  },
  {
    id: 6,
    title: "Business Suite",
    description: "Ideal for business travelers, with workspace and privacy.",
    price: 150,
    rating: 4.6,
    availability: false, 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hwg-nSXeJuGn0RTVfr_VbsfeNtbCpoAg8Q&s",
    capacity: 2,
  size: "35 m²",
  bedType: "King",
  amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar"]

  },
];

export default rooms;
