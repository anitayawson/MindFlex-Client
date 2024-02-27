import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const signup = async ({ name, email, password, confirmPassword }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      const userData = response.data.user;
      updateUser(userData);
      setUser(userData);
      console.log("Signup successful, userData:", userData);
      return userData;
    } catch (error) {
      console.error("Signup error:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      const userData = response.data.user;
      updateUser(userData);
      setUser(userData);
      console.log("Login successful, userData:", userData);
      return userData;
    } catch (error) {
      console.error("Login error:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
