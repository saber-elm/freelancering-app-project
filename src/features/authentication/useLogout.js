import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutUserApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUserApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logout, isPending };
}
