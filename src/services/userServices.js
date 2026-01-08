import apiClient from "../utils/api-client";
import { jwtDecode } from "jwt-decode";

const tokenName = "token";

export async function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryaddress);
  body.append("profilePic", profile);

  // By writing const { data } = ..., you are telling JavaScript:
  // "I know the object returned has a property called 'data'.
  // Please grab just that property and ignore the rest (like status, headers, and config)."
  // refer to this article: https://axios-http.com/docs/res_schema
  const { data } = await apiClient.post("/user/signup", body);
  localStorage.setItem(tokenName, data.token);
}

export async function login(user) {
  const { data } = await apiClient.post("/user/login", user);
  localStorage.setItem(tokenName, data.token);
}

export function logout() {
  localStorage.removeItem(tokenName);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem(tokenName);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenName);
}
