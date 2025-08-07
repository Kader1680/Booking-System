import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        // Optionally save token or navigate:
        // localStorage.setItem("token", data.token);
        window.location.href = "/profile"; // Redirect to profile or login page
      } else {
        alert(data.msg || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 
                         outline outline-1 outline-gray-300 placeholder:text-gray-400 
                         focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 
                         outline outline-1 outline-gray-300 placeholder:text-gray-400 
                         focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-900">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={form.gender}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 
                         outline outline-1 outline-gray-300 focus:outline-2 
                         focus:outline-indigo-600 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 
                         outline outline-1 outline-gray-300 placeholder:text-gray-400 
                         focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 
                         text-sm font-semibold text-white shadow hover:bg-indigo-500 
                         focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              Register
            </button>

            <a
              href="/login"
              className="flex w-full justify-center rounded-md text-indigo-600 
                         px-3 py-1.5 text-sm font-semibold bg-white shadow 
                         hover:bg-indigo-100 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
