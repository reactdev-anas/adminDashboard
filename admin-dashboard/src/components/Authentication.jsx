import React, { useState } from "react";
import adminIcon from '../../public/admin.svg'; 
import axios from "axios";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const  data  = await axios.post("http://localhost:5001/api/auth/login", {
  //       email,
  //       password,
  //     });

  //     localStorage.setItem("adminToken", data.token);
  //     window.location.href = "/admin/dashboard";
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Invalid credentials. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {

    const { data } = await axios.post(
      "http://localhost:5001/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("adminToken", data.token);

    window.location.href = "/admin/dashboard";

  } catch (err) {

    setError(
      err.response?.data?.message ||
      "Invalid credentials. Please try again."
    );

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-3xl opacity-60"></div>
      </div>

      <div className="w-full max-w-112.5">
        {/* Logo/Icon Area */}
        <div className="flex flex-col items-center mb-8">
          <div className="  mb-4">
             <img src={adminIcon} alt="Logo" className="w-20 h-20" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back</h2>
          <p className="text-gray-500 mt-2">Enter your admin credentials to continue</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-xl shadow-blue-900/5 border border-gray-100"
        >
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2">
              <span className="shrink-0 text-lg">⚠️</span>
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="text-sm font-semibold text-gray-700">Password</label>
               
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-gray-900 text-white py-3.5 rounded font-bold hover:bg-black active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gray-900/20"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Authentication;