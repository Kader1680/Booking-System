import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

       //const id = JSON.parse(localStorage.getItem("user")).user.id

        const res = await axios.get("/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(res.data);
        setBookings(res.data.Bookings || []);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p className="text-center py-10">Loading profile...</p>;

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={user.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm">{user.gender}</p>

            <div className="mt-6 space-y-2 w-full">
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500">
                Edit Profile
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-400"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Bookings */}
          <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">My Bookings</h4>
            {bookings.length > 0 ? (
              <ul className="space-y-4">
                {bookings.map((b) => (
                  <li
                    key={b.id}
                    className="border rounded p-4 flex flex-col sm:flex-row justify-between sm:items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-700">{b.Room?.title || "Unknown Room"}</h5>
                      <p className="text-sm text-gray-500">
                        {b.checkIn} → {b.checkOut}
                      </p>
                    </div>
                    <div className="text-right sm:text-left mt-2 sm:mt-0">
                      <p className="text-indigo-600 font-semibold">${b.price}</p>
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          b.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">You have no bookings yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
