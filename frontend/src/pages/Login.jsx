import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
function Login() {
 const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
 
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      window.location.href = "/profile";
       
    } catch (err) {
      setError(err.message);
    }
  };  

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" className="mx-auto h-10 w-auto" /> */}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input id="password" name="password" type="password" required value={form.password} onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
          </div>

            <button type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
                Login
            </button>
            <a href='/register'    className="flex w-full justify-center rounded-md text-indigo-600 px-3 py-1.5 text-sm font-semibold bg-white shadow text:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
            
                
           
                Register
                 
            </a>


        </form>
      </div>
    </div>
  );
}

export default Login;
