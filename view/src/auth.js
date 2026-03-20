
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export const getRole = () => {
  return localStorage.getItem("role"); // "admin" / "user"
};
