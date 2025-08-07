// src/components/admin/AdminLayout.jsx
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Admin</h2>
        <nav className="space-y-2">
          <Link to="rooms/create" className="block hover:text-indigo-400">Create Rooms</Link>
          <Link to="/admin/users" className="block hover:text-indigo-400">Users</Link>
          <Link to="/admin/analytics" className="block hover:text-indigo-400">Analytics</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
