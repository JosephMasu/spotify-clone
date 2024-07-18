'use client';

import { User } from "@supabase/auth-helpers-nextjs";
import { MyUserContextProvider } from "./useUser";

interface UserProviderProps{
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> =({
    children
}) =>{
    return(
      <MyUserContextProvider>
        {children}
      </MyUserContextProvider>  
    );
};
export default UserProvider;