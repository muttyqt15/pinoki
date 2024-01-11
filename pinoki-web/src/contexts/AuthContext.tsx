import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

    const signUp = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        try {
          const res = await createUserWithEmailAndPassword(email, password);
          if (res) {
            setUser(res.user);
          }
          setLoading(false);
        } catch (error) {
          // Handle error
          setLoading(false);
        }
      };
  const value: AuthContextType = {
    user,
    signUp,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
