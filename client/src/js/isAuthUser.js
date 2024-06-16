import { useSelector } from "react-redux";
import React from "react";

const useAuthUser = () => {
  const isAuth = useSelector((state) => state.token);
  return isAuth;
};

export default useAuthUser;