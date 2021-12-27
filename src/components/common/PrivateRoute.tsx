import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import routs from "../../routes";
import { selectisAuthorized } from "../../store/selectors";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const isAuthorized = useSelector(selectisAuthorized);

  if (isAuthorized) {
    return <Component {...rest} />;
  }

  return <Navigate to={routs.login} />;
};

export default PrivateRoute;
