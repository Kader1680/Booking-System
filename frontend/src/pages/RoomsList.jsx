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
        console.error("Erreur lors du chargement des chambres :", err);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Chambres disponibles
        </h2>

        <div className="bg-white">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Nouveautés
              </h1>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">Produits</h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.length === 0 ? (
                      <p className="text-gray-500 col-span-full text-center">
                        Aucune chambre disponible.
                      </p>
                    ) : (
                      rooms.map((room) => (
                        <Link key={room.id} to={`/rooms/${room.id}`}>
                          <div className="bg-white shadow rounded-lg overflow-hidden">
                            <img
                              src={`http://localhost:5000${room.imageUrl}`}
                              alt={room.title}
                              className="w-full h-48 object-cover"
                            />

                            <div className="p-5">
                              <h3 className="text-xl font-semibold text-gray-800">
                                {room.title}
                              </h3>
                              <p className="mt-2 text-gray-600 text-sm truncate">
                                {room.description}
                              </p>
                              <div className="mt-4 flex items-center justify-between">
                                <span className="text-yellow-500 font-semibold">
                                  ⭐ 4.5
                                </span>
                                <span className="text-indigo-600 font-bold text-lg">
                                  {room.price}€ / nuit
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
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
