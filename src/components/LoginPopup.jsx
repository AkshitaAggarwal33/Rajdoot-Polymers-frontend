import { useState } from "react";

export default function LoginPopup({ closePopup, openRegister }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const BASE_URL = "https://rajdoot-polymers-backend.onrender.com"
      const res = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // store user
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful");
        // setUser(data.user)

        // close popup
        closePopup();
      } else {
        alert(data.msg || "Login Failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96 relative">
        {/* Close Button */}
        <button onClick={closePopup} className="absolute top-3 right-4 text-xl">
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>
        {/* SWITCH TO REGISTER */}{" "}
        <p
          onClick={openRegister}
          className="text-blue-600 mt-4 cursor-pointer text-center"
        >
          {" "}
          New user? Register here{" "}
        </p>
      </div>
    </div>
  );
}
