'use client';

import logout from '@/actions/logout';
import validateToken from '@/actions/validate-token';
import { User } from '@/interfaces/user';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

interface UserContextProviderProps {
  children: ReactNode;
  user: User | null;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useContext deve estaar dentro do Provider.');

  return context;
};

export function UserContextProvider({ children, user }: UserContextProviderProps) {
  const [userState, setUser] = useState<User | null>(user);

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) await logout();
    }

    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
