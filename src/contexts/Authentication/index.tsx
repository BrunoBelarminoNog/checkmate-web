import React, { createContext, useState } from "react";

import {
  AuthenticationProviderData,
  AuthenticationProviderProps,
} from "./types";

export const AuthenticationContext = createContext<AuthenticationProviderData>(
  {} as AuthenticationProviderData
);

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const [user, setUser] = useState({});
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider value={{}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
