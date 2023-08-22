import React, { PropsWithChildren } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const user = useAuth(); // usage of custom hook !

  if (!user.isUserAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{props.children}</>;
};

export default RequireAuth;
