import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('http://localhost:5000/api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log('Profile data:', res.data);
      setUser(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Profile load error:', err);
      setError('Failed to load profile. Please try again.');
      setLoading(false);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    });
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!user) return <div className="text-center mt-10 text-red-500">No profile data available.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          {user.gender && <p><span className="font-medium">Gender:</span> {user.gender}</p>}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
        {user.Bookings && user.Bookings.length > 0 ? (
          <div className="space-y-4">
            {user.Bookings.map(booking => (
              <div key={booking.id} className="border-b pb-4 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Room: {booking.Room?.name || 'Unknown Room'}</p>
                    <p>Type: {booking.Room?.type || 'N/A'}</p>
                  </div>
                  <div>
                    <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
                    <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status || 'Confirmed'}
                  </span>
                  <p className="mt-1 font-medium">Total: ${booking.totalPrice?.toFixed(2) || '0.00'}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;