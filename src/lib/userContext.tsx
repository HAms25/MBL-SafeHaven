import { Session } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import  supabase  from "../lib/supabase";

// definir context para guardar el session y el profile
export interface UserProfile {
  username: string;
  avatarUrl?: string;
}

export interface UserInfo {
  session: Session | null;
}

const UserContext = createContext<UserInfo>({
  session: null,
});

// crear un provider donde vamos a tener la logica para escuchar cambios de la session
export function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    session: null,
  });
  console.log('UserInfo:', userInfo)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserInfo({ ...userInfo, session });
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setUserInfo({ session });
    });
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

// crear un hook reutilizable que utilice el context
export function useUserInfo() {
  return useContext(UserContext);
}