import React, { useState } from "react";
import { Shield } from "lucide-react";

const App = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [score, setScore] = useState(0);

  const checkStrength = (pass) => {
    let tempScore = 0;

    if (pass.length >= 8) tempScore++;
    if (/[A-Z]/.test(pass)) tempScore++;
    if (/[a-z]/.test(pass)) tempScore++;
    if (/[0-9]/.test(pass)) tempScore++;
    if (/[^A-Za-z0-9]/.test(pass)) tempScore++;

    setScore(tempScore);

    switch (tempScore) {
      case 0:
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Moderate";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  };

  const getColor = () => {
    switch (score) {
      case 0:
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-yellow-400";
      case 3:
        return "bg-yellow-300";
      case 4:
        return "bg-teal-400";
      case 5:
        return "bg-teal-600";
      default:
        return "bg-gray-700";
    }
  };

  const handleChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setStrength(checkStrength(newPass));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-10">
        <div className="flex items-center space-x-3 mb-6">
          <h1 className="text-3xl font-extrabold text-gray-100">
            Password Strength Checker
          </h1>
        </div>

        <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">
          Enter your password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="••••••••"
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />

        {password && (
          <>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-gray-300 font-semibold">Strength:</span>
              <span
                className={`font-semibold text-white
                `}
              >
                {strength}
              </span>
            </div>

            <div className="w-full h-4 rounded-full bg-gray-700 mt-2 overflow-hidden">
              <div
                className={`${getColor()} h-4 rounded-full transition-all duration-500`}
                style={{ width: `${(score / 5) * 100}%` }}
              />
            </div>

            <ul className="mt-6 space-y-1 text-sm text-gray-400">
              <li className={password.length >= 8 ? "text-teal-400 font-semibold" : ""}>
                Minimum 8 characters
              </li>
              <li className={/[A-Z]/.test(password) ? "text-teal-400 font-semibold" : ""}>
                Uppercase letter
              </li>
              <li className={/[a-z]/.test(password) ? "text-teal-400 font-semibold" : ""}>
                Lowercase letter
              </li>
              <li className={/[0-9]/.test(password) ? "text-teal-400 font-semibold" : ""}>
                Number
              </li>
              <li className={/[^A-Za-z0-9]/.test(password) ? "text-teal-400 font-semibold" : ""}>
                Special character
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
