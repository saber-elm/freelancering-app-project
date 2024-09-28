import http from "./httpService";

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function ChangeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
