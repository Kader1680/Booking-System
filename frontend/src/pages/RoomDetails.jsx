import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState("");

 
  // Fetch room from API
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        setRoom(res.data);
        console.log("Room fetched:");
      } catch (err) {
        console.error("Room fetch failed", err);
        setError("Failed to load room.");
      }
    };
    fetchRoom();
  }, [id]);

  if (!room) return <div className="p-10">Loading room details...</div>;

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        )
      : 0;

  const totalPrice = nights * room.price;

  
const handleBooking = async () => {
  if (!checkIn || !checkOut) {
    return setError("Please select both check-in and check-out dates.");
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    return setError("Check-out must be after check-in.");
  }

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/bookings",
      {
        roomId: room.id,
        checkIn,
        checkOut,
        totalPrice,
        guestId: JSON.parse(localStorage.user).data.id,
       

      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setError("");
    setIsBooked(true);
  } catch (err) {
    console.error("Booking failed:", err.response?.data || err.message);
    setError("Booking failed. Please try again.");
  }
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Room Info */}
        <div>
          <img
            src={room.imageUrl}
            alt={room.title}
            className="rounded-lg w-full h-72 object-cover"
          />
          <h2 className="text-3xl font-bold mt-4">{room.title}</h2>
          <p className="text-gray-600 mt-2">{room.description}</p>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p><strong>Size:</strong> {room.size || "N/A"}</p>
            <p><strong>Capacity:</strong> {room.capacity || "N/A"} guest(s)</p>
            <p><strong>Bed Type:</strong> {room.bedType || "Standard"}</p>
            <p><strong>Amenities:</strong> {room.amenities?.join(", ") || "N/A"}</p>
            <p className="text-sm mt-1 text-gray-500">
              <strong>Availability:</strong>{" "}
              {room.availability ? (
                <span className="text-green-600">Available</span>
              ) : (
                <span className="text-red-500">Not Available</span>
              )}
            </p>
          </div>

          <div className="mt-4 text-lg text-indigo-600 font-semibold">
            ${room.price} / night
          </div>
          <div className="text-yellow-500 mt-1">⭐ {room.rating}</div>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Book This Room</h3>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <label className="block text-sm mb-1 text-gray-700">Check-In Date</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mb-4"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label className="block text-sm mb-1 text-gray-700">Check-Out Date</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mb-4"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          {nights > 0 && (
            <div className="mb-4 text-gray-800 text-sm">
              {nights} night(s) × ${room.price} ={" "}
              <span className="font-bold text-indigo-600">${totalPrice}</span>
            </div>
          )}

          <button
            onClick={handleBooking}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
          >
            Confirm Booking
          </button>

          {isBooked && (
            <div className="mt-4 text-green-600 font-semibold">
              Booking confirmed! Proceed to payment:
              <button
                onClick={() => navigate("/stripe")}
                className="block mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
