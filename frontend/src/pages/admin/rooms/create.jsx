import { useState } from "react";
import axios from "axios";
  
export default function CreateRoom() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    availability: "available",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roomData = new FormData();
    roomData.append("title", form.title);
    roomData.append("description", form.description);
    roomData.append("price", form.price);
    roomData.append("availability", form.availability);
    if (form.image) {
      roomData.append("image", form.image);
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:5000/api/rooms", roomData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setForm({
        title: "",
        description: "",
        price: "",
        availability: "available",
        image: null,
      });
      if (res) {
        window.location.href = "/rooms";
      }
    } catch (error) {
      console.error("Échec de la création de la chambre :", error);
      alert("Erreur lors de la création de la chambre.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Créer une nouvelle chambre</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Titre de la chambre</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Suite Deluxe"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description de la chambre..."
            className="w-full border border-gray-300 px-4 py-2 rounded h-24"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Prix par nuit (€)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Disponibilité</label>
          <select
            name="availability"
            value={form.availability}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          >
            <option value="available">Disponible</option>
            <option value="unavailable">Indisponible</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Image de la chambre</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
        >
          Enregistrer la chambre
        </button>
      </form>
    </div>
  );
}
