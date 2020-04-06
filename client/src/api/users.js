import http from "../utils/http";

export const fetchList = () => http.get("/users");
export const remove = (id) => http.delete(`/users/${id}`);
