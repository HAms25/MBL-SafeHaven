import type {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js";
import React from "react";
import Auth from "../../hooks/Auth";

interface AuthFormProps {
  onSignUp: (credentials: SignUpWithPasswordCredentials) => void;
  onLogin: (credentials: SignInWithPasswordCredentials) => void;

}

export default function AuthButton({
  onSignUp,
  onLogin,
}: AuthFormProps) {

  const { email, password, mode } =  Auth()
  const handleSubmit = () => {
    if (mode === "login") {
      onLogin({ email, password });
    } else {
      onSignUp({ email, password });
    }
  };

  return { handleSubmit }
}
