import React from "react";

import { AuthLayout } from "../layout/Auth";
import { AuthModule } from "../modules/Auth";

function LoginPage() {
  return <AuthModule type="login" />;
}

export default AuthLayout(LoginPage);
