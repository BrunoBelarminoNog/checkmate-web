import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from ".";
import { TCreateUserParams } from "./types";

export async function logoutUser({ email, password }: TCreateUserParams) {
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
