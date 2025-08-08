// src/pages/ProfilePage.jsx
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  console.log("Token in localStorage:", localStorage.getItem("token"));
  console.log("Authorization header:", `Bearer ${localStorage.getItem("token")}`);
 
  
  
   useEffect(() => {
  fetch('http://localhost:5000/api/profile', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Profile data from API:", data);
      setProfile(data); // ✅ actually store it in state
    })
    .catch(err => console.error("Error fetching profile:", err));
}, []);
 

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* User Info */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Profile Information</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Joined:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Bookings */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">My Bookings</h2>
        {profile.Bookings && profile.Bookings.length > 0 ? (
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Room</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Check-In</th>
                <th className="p-2 border">Check-Out</th>
              </tr>
            </thead>
            <tbody>
              {profile.Bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{booking.Room?.name}</td>
                  <td className="p-2 border">{booking.Room?.location}</td>
                  <td className="p-2 border">${booking.Room?.price}</td>
                  <td className="p-2 border">{new Date(booking.checkIn).toLocaleDateString()}</td>
                  <td className="p-2 border">{new Date(booking.checkOut).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no bookings yet.</p>
        )}
      </div>
    </div>
  );
}
