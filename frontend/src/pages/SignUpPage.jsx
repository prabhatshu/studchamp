import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-base-100">
        
        {/* LEFT - IMAGE SECTION */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-primary/10 p-8">
          <div className="max-w-sm w-full">
            <img
              src="/signupimage.png"
              alt="Collaboration"
              className="w-full h-auto object-contain"
            />
            <div className="text-center mt-6 space-y-2">
              <h2 className="text-xl font-semibold">Collaborate with students worldwide</h2>
              <p className="text-sm opacity-70">
                Connect, co-learn, and grow with peers on the same academic path.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM SECTION */}
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          {/* LOGO */}
          <div className="flex items-center gap-2 mb-6">
            <ShipWheelIcon className="text-primary size-8" />
            <h1 className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              StudChamp
            </h1>
          </div>

          <h2 className="text-2xl font-semibold mb-1">Create an Account</h2>
          <p className="text-sm text-gray-500 mb-6">
            Join StudChamp to collaborate and learn with fellow students around the world.
          </p>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs opacity-70 mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" required />
                <span className="text-xs leading-tight">
                  I agree to the{" "}
                  <span className="text-primary hover:underline">terms of service</span> and{" "}
                  <span className="text-primary hover:underline">privacy policy</span>.
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Creating...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

