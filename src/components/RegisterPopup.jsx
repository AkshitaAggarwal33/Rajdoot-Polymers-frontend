import { useState } from "react";
import axios from "axios";

export default function RegisterPopup({ showPopup, setShowPopup }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [verifyMobile, setVerifyMobile] = useState("");

  const registerUser = async () => {
    const BASE_URL = "https://rajdoot-polymers-backend.onrender.com";

    const res = await axios.post(
      `${BASE_URL}/api/users/register`,
      form,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.registered) {
      alert("Registration Successful");

      localStorage.setItem("registered", "true");
      setShowPopup(false);
    }
  };

  const verifyUser = async () => {
    const BASE_URL = "https://rajdoot-polymers-backend.onrender.com";

    const res = await axios.post(`${BASE_URL}/api/users/verify`, {
      mobile: verifyMobile,
    });

    if (res.data.registered) {
      alert("Welcome back!");

      localStorage.setItem("registered", "true");
      setShowPopup(false);
    } else {
      alert("User not registered");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white w-[380px] rounded-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome 👋
        </h2>

        {!isRegistered ? (
          <>
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black"
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black"
            />

            <input
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value })
              }
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black"
            />

            <button
              onClick={registerUser}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg"
            >
              Register
            </button>

            <p
              onClick={() => setIsRegistered(true)}
              className="text-blue-500 text-sm mt-4 text-center cursor-pointer"
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
              className="border border-gray-300 w-full p-3 mb-4 rounded-lg text-black"
            />

            <button
              onClick={verifyUser}
              className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg"
            >
              Verify
            </button>

            <p
              onClick={() => setIsRegistered(false)}
              className="text-blue-500 text-sm mt-4 text-center cursor-pointer"
            >
              Register instead
            </p>
          </>
        )}
      </div>
    </div>
  );
}