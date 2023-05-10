import { useContext } from "react";
import { AuthenticationContext } from ".";
import { AuthenticationProviderData } from "./types";

export const useAuthentication = (): AuthenticationProviderData =>
  useContext(AuthenticationContext);
