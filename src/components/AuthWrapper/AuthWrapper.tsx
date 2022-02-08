import { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, RouteProps, useNavigate } from "react-router-dom";
import StateInterface from "../../interfaces/stateInterface";

export const AuthWrapper: FunctionComponent<RouteProps> = () => {
  const user = useSelector((state: StateInterface) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      navigate("/");
    }
  });

  return (
    <>
      <Outlet />
    </>
  );
};
