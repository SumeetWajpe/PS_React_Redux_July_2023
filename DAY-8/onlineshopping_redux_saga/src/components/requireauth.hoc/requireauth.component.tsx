import React, { PropsWithChildren } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const user = useAuth(); // usage of custom hook !
  const location = useLocation();
  if (!user.isUserAuthenticated) {
    return <Navigate to="/" state={location.pathname} />;
  }
  return <>{props.children}</>;
};

export default RequireAuth;
