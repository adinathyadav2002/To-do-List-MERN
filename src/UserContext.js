import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userdata, setUserdata] = useState({});

  return (
    <UserContext.Provider value={{ userdata, handleUserData: setUserdata }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    return new Error("The user context used outside the user context Provider");
  return context;
}
