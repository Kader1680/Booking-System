import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Error loading rooms:", err);
      }
    };

    fetchRooms();
  }, []);

  // States for filters
  const [price, setPrice] = useState("");  
  const [availability, setAvailability] = useState(""); 
  const [rating, setRating] = useState(""); 
  const [bookings, setBookings] = useState(""); 
  const [size, setSize] = useState("");  
  const [filerProdcuts, setfilerProdcuts] = useState(rooms);
  useEffect(() => {
  setfilerProdcuts(rooms);
  }, [rooms]);

  
  const handleFilter = (e) => {
  e.preventDefault();

  let filtered = rooms;

  if (price) {
    filtered = filtered.filter((room) => {
      if (price === "cheap") return room.price < 50.00;
      if (price === "medium") return room.price >= 50.00 && room.price <= 150.00;
      if (price === "expensive") return room.price > 150.00;
      return true;
    });
  }

 
  if (availability) {
    filtered = filtered.filter((room) =>
      availability === "available"
        ? room.availability === "available"
        : room.availability === "unavailable"
    );
  }

  if (rating) {
    filtered = filtered.filter((room) => Math.floor(room.rating) === Number(rating));
  }

  // Filter by bookings
  if (bookings) {
    filtered = filtered.sort((a, b) => {
      if (bookings === "most") return b.totalBookings - a.totalBookings;
      if (bookings === "less") return a.totalBookings - b.totalBookings;
      return 0;
    });
  }

  // Filter by size
  if (size) {
    filtered = filtered.filter((room) => room.size === size);
  }

  setfilerProdcuts(filtered);
};


  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Available Rooms
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Rooms</h2>
            <form onSubmit={handleFilter} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-600">Price</label>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Any</option>
                  <option value="cheap">Cheap</option>
                  <option value="medium">Medium</option>
                  <option value="expensive">Expensive</option>
                </select>
              </div>
 
              <div>
                <label className="block text-sm font-medium text-gray-600">Availability</label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Any</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
 
              <div>
                <label className="block text-sm font-medium text-gray-600">Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Any</option>
                  <option value="1">1 ★</option>
                  <option value="2">2 ★</option>
                  <option value="3">3 ★</option>
                  <option value="4">4 ★</option>
                  <option value="5">5 ★</option>
                </select>
              </div>
 
              <div>
                <label className="block text-sm font-medium text-gray-600">Bookings</label>
                <select
                  value={bookings}
                  onChange={(e) => setBookings(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Any</option>
                  <option value="most">Most Booked</option>
                  <option value="less">Less Booked</option>
                </select>
              </div>

            
              <div>
                <label className="block text-sm font-medium text-gray-600">Room Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Any</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div> 

              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition w-full"
                >
                  Apply Filters
                </button>
              </div>  
            </form>
          </div>

          {/* ROOMS */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Rooms List
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.length === 0 ? (
                <p className="text-gray-500 col-span-full text-center">
                  No rooms available.
                </p>
              ) : (
                
                filerProdcuts.map((room) => (
                  <Link key={room.id} to={`/rooms/${room.id}`}>
                    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                      <img
                        src={`http://localhost:5000${room.imageUrl}`}
                        alt={room.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {room.title}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm truncate">
                          {room.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-yellow-500 font-semibold">
                            ⭐ {room.rating || 4.5}
                          </span>
                          <span className="text-indigo-600 font-bold text-lg">
                            {room.price}€ / night
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
