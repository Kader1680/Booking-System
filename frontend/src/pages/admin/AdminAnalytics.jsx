import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminAnalytics() {
  const [stats, setStats] = useState({
    users: 0,
    rooms: 0,
    bookings: 0,
    revenue: "$0"
  });

  const [detailedData, setDetailedData] = useState({
    users: [],
    rooms: [],
    bookings: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/analytics', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        const { users, rooms, bookings } = response.data.data;
        
        setStats({
          users: users.length || 0,
          rooms: rooms.length || 0,
          bookings: bookings.length || 0,
          revenue: "$0"
        });

        setDetailedData({
          users,
          rooms,
          bookings
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError('Failed to load analytics data');
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading analytics...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  // Data for counter cards
  const statsData = [
    { name: 'users', value: stats.users },
    { name: 'rooms', value: stats.rooms },
    { name: 'bookings', value: stats.bookings },
    { name: 'revenue', value: stats.revenue }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard Analytics</h2>
      
      {/* Counter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat) => (
          <div key={stat.name} className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-gray-500 text-sm capitalize">{stat.name}</div>
            <div className="text-xl font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'rooms' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('rooms')}
          >
            Rooms
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'bookings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings
          </button>
        </div>

        {/* Users Table */}
        {activeTab === 'users' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {detailedData.users.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role || 'user'}</td>
                  </tr>


                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Rooms Table */}
        {activeTab === 'rooms' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {detailedData.rooms.map(room => (
                  <tr key={room.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.availability || 'available'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bookings Table */}
        {activeTab === 'bookings' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {detailedData.bookings.map(booking => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.user?.name || `User ${booking.guestId}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.room?.name || `Room ${booking.roomId}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                    </td>
                   
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}