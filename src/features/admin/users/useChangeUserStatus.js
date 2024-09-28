import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ChangeUserStatusApi } from "../../../services/userServices";

export default function useChangeUserStatus() {
  // const queryClient = useQueryClient();

  const { mutate: changeUserStatus, isPending: isChanging } = useMutation({
    mutationFn: ChangeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      // queryClient.invalidateQueries({
      //   queryKey: ["users"],
      // });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { changeUserStatus, isChanging };
}
