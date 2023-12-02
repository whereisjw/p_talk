import { getCookie, removeCookie } from "./cookie";

export const getUser = () => {
  let userinfo =
    localStorage.getItem("info") && getCookie("auth_lupin")
      ? JSON.parse(localStorage.getItem("info"))
      : null;
  return userinfo;
};

export const removeUser = () => {
  removeCookie("auth_lupin");
  localStorage.removeItem("info");
};
