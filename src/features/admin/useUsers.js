import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/userServices";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });
  const { users } = data || {};
  return { isLoading, users };
}
