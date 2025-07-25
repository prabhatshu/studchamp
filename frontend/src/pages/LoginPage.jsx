import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
          {/* Branding */}
          <div className="mb-8 flex items-center gap-3">
            <ShipWheelIcon className="text-indigo-600 w-8 h-8" />
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-wide">StudChamp</h1>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error.response.data.message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
              <p className="text-sm text-gray-500">
               Sign in to connect, collaborate, and grow with fellow learners.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="loading loading-spinner loading-xs" />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-600 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* Illustration Panel */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-indigo-100 items-center justify-center">
          <div className="p-10 text-center">
            <img src="signupimage.png" alt="Language connection illustration" className="mx-auto mb-6 w-64 h-64 object-contain" />
            <h2 className="text-xl font-bold text-indigo-800 mb-2">
              Join students from your course and learn together—anytime, anywhere.
            </h2>
            <p className="text-sm text-indigo-600">
              Learn together, stay motivated, and support each other's academic and competitive journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

