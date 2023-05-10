import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from ".";
import { TCreateUserParams } from "./types";

export async function loginUser({ email, password }: TCreateUserParams) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
