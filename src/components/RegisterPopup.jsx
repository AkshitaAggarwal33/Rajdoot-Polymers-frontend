import { useState, useEffect } from "react";
import axios from "axios";

export default function RegisterPopup() {
  const [show, setShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [verifyMobile, setVerifyMobile] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      document.body.style.overflow = "hidden";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const registerUser = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      form,
    );

    if (res.data.registered) {
      alert("Registration Successful");

      setShow(false);
      document.body.style.overflow = "auto";
    }
  };

  const verifyUser = async () => {
    const res = await axios.post("http://localhost:5000/api/users/verify", {
      mobile: verifyMobile,
    });

    if (res.data.registered) {
      alert("Welcome back!");

      setShow(false);
      document.body.style.overflow = "auto";
    } else {
      alert("User not registered");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
      <div className="bg-white w-[380px] rounded-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome 👋
        </h2>

        {!isRegistered ? (
          <>
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              onClick={registerUser}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-medium transition"
            >
              Register
            </button>

            <p
              onClick={() => setIsRegistered(true)}
              className="text-blue-500 text-sm mt-4 text-center cursor-pointer hover:underline"
            >
              Already Registered?
            </p>
          </>
        ) : (
          <>
            <input
              placeholder="Enter Mobile Number"
              value={verifyMobile}
              onChange={(e) => setVerifyMobile(e.target.value)}
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={verifyUser}
              className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg font-medium transition"
            >
              Verify
            </button>

            <p
              onClick={() => setIsRegistered(false)}
              className="text-blue-500 text-sm mt-4 text-center cursor-pointer hover:underline"
            >
              Register instead
            </p>
          </>
        )}
      </div>
    </div>
  );
}
