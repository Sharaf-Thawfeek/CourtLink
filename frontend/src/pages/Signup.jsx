import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import signupImg from "../assets/images/signup.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "player", // Default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    console.log("Form data being sent:", formData); // Log the data being sent

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, formData);
      console.log("Signup response:", response); // Log the response

      if (response.status === 201) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setErrors({ apiError: error.response?.data?.message || "Signup failed. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-lightBlue py-[60px] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src={signupImg} alt="Happy sports players" className="w-full h-full object-cover" />
          </div>

          <div className="lg:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-headingColor mb-2">Create Your Account</h2>
            <p className="text-gray-600 mb-8">Join CourtLink to book courts and manage your sports activities.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.apiError && <p className="text-red-600">{errors.apiError}</p>}

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-gray-700 mb-2">Account Type</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${formData.role === 'player' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="role"
                      value="player"
                      checked={formData.role === 'player'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Player</span>
                  </label>
                  
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${formData.role === 'courtOwner' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="role"
                      value="courtOwner"
                      checked={formData.role === 'courtOwner'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Court Owner</span>
                  </label>
                  
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${formData.role === 'admin' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={formData.role === 'admin'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                </div>
                {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-lg`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600" required />
                <label htmlFor="terms" className="ml-2 block text-gray-700">
                  I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and 
                  <Link to="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</Link>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ${isSubmitting && "opacity-50 cursor-not-allowed"}`}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Already have an account? 
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
