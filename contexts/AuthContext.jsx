import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const findUserByEmail = async (authUser) => {
    const usersSnapshot = await get(ref(db, `users`));
    const usersData = usersSnapshot.val();
    return usersData
      ? Object.entries(usersData).find(
          ([, user]) => user.email === authUser.email
        )?.[1] || null
      : null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userData = await findUserByEmail(authUser); // Ensure async resolution
        setUser(userData); // Set the user in state
      } else {
        setUser(null); // Clear user state if not authenticated
      }
      setLoading(false); // Stop loading once user is resolved
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
