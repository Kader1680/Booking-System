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

  // Récupérer les détails de la chambre
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        setRoom(res.data);
      } catch (err) {
        console.error("Échec de récupération de la chambre", err);
        setError("Impossible de charger les détails de la chambre.");
      }
    };
    fetchRoom();
  }, [id]);

  if (!room) return <div className="p-10">Chargement des détails de la chambre...</div>;

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
      return setError("Veuillez sélectionner les dates d'arrivée et de départ.");
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      return setError("La date de départ doit être après la date d'arrivée.");
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
      navigate("/payment", { state: { amount: totalPrice } });
    } catch (err) {
      console.error("Échec de la réservation :", err.response?.data || err.message);
      window.location.href = "/login";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gauche : Informations sur la chambre */}
        <div>
          <img
            src={`http://localhost:5000${room.imageUrl}`} 
            alt={room.title}
            className="rounded-lg w-full h-72 object-cover"
          />
          <h2 className="text-3xl font-bold mt-4">Titre : {room.title}</h2>
          <p className="text-gray-600 mt-2">Description : {room.description}</p>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p className="text-sm mt-1 text-gray-500">
              <strong>Disponibilité :</strong>{" "}
              {room.availability ? (
                <span className="text-green-600">Disponible</span>
              ) : (
                <span className="text-red-500">Indisponible</span>
              )}
            </p>
          </div>

          <div className="mt-4 text-lg text-indigo-600 font-semibold">
            {room.price} € / nuit
          </div>
          <div className="text-yellow-500 mt-1">⭐ {room.rating}</div>
        </div>

        {/* Droite : Formulaire de réservation */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Réserver cette chambre</h3>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <label className="block text-sm mb-1 text-gray-700">Date d'arrivée</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mb-4"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label className="block text-sm mb-1 text-gray-700">Date de départ</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded mb-4"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          {nights > 0 && (
            <div className="mb-4 text-gray-800 text-sm">
              {nights} nuit(s) × {room.price} € ={" "}
              <span className="font-bold text-indigo-600">{totalPrice} €</span>
            </div>
          )}

          <button
            onClick={handleBooking}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
          >
            Confirmer la réservation
          </button>

          {isBooked ? (
            navigate("/payment", { state: { amount: totalPrice } })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
