import http from "./httpService";

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}
