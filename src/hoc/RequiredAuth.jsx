import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  // console.log(location)
  const from = {
    pathname: location.pathname,
  };

  if (isAuth) return children;
  return <Navigate to={"/login"} state={from} replace />;
};

export default RequiredAuth;

// jbh require auth pr jyega tbh location desired file hoti hai 
// then hme bss use location koh state m save krna hai or use navigate m 
// state k torr ps pass krna hai