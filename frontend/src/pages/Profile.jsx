// src/pages/ProfilePage.jsx
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  console.log("Token dans le localStorage :", localStorage.getItem("token"));
  console.log(
    "Authorization header :",
    `Bearer ${localStorage.getItem("token")}`
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Données du profil depuis l'API :", data);
        setProfile(data);
      })
      .catch((err) => console.error("Erreur lors du chargement du profil :", err));
  }, []);

  if (!profile) return <p>Chargement...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Infos utilisateur */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Informations du profil</h2>
        <p>
          <strong>Nom :</strong> {profile.name}
        </p>
        <p>
          <strong>Email :</strong> {profile.email}
        </p>
        <p>
          <strong>Sexe :</strong> {profile.gender}
        </p>
        <p>
          <strong>Membre depuis :</strong>{" "}
          {new Date(profile.createdAt).toLocaleDateString("fr-FR")}
        </p>
      </div>

      {/* Réservations */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Mes réservations</h2>
        {profile.Bookings && profile.Bookings.length > 0 ? (
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Chambre</th>
                <th className="p-2 border">Lieu</th>
                <th className="p-2 border">Prix</th>
                <th className="p-2 border">Arrivée</th>
                <th className="p-2 border">Départ</th>
              </tr>
            </thead>
            <tbody>
              {profile.Bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{booking.Room?.name}</td>
                  <td className="p-2 border">{booking.Room?.location}</td>
                  <td className="p-2 border">
                    {booking.Room?.price} € / nuit
                  </td>
                  <td className="p-2 border">
                    {new Date(booking.checkIn).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="p-2 border">
                    {new Date(booking.checkOut).toLocaleDateString("fr-FR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Vous n'avez pas encore de réservations.</p>
        )}
      </div>
    </div>
  );
}
