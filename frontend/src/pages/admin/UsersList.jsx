const users = [
  { id: 1, name: "Kader", email: "kader@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
];

export default function UsersList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
