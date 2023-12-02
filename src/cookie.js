import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, option) => {
  return cookie.set(name, value, option);
};

export const getCookie = (name, value, option) => {
  return cookie.get(name, value, option);
};

export const removeCookie = (name, value, option) => {
  return cookie.remove(name, value, option);
};
