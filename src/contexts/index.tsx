import React, { PropsWithChildren } from "react";
import { AuthenticationProvider } from "./Authentication";

const ContextProviders = ({ children }: PropsWithChildren) => {
  return <AuthenticationProvider>{children}</AuthenticationProvider>;
};

export default ContextProviders;
