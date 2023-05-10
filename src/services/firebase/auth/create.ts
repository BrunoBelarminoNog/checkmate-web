import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from ".";
import { TCreateUserParams } from "./types";

export async function createUser({
  email,
  emailConfirmation,
  password,
  passwordConfirmation,
}: TCreateUserParams) {
  if (email !== emailConfirmation) {
    console.error("Email nao confere");
    return;
  }

  if (password !== passwordConfirmation) {
    console.error("Senha nao confere");
    return;
  }

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
