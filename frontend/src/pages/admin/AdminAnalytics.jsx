export default function AdminAnalytics() {
  const data = {
    users: 120,
    rooms: 15,
    bookings: 45,
    revenue: "$6,200",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Analytics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(data).map(([label, value]) => (
          <div key={label} className="bg-white p-4 rounded shadow text-center">
            <div className="text-gray-500 text-sm capitalize">{label}</div>
            <div className="text-xl font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
