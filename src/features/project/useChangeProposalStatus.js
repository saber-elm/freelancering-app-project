import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

export default function useChangeProposalStatus() {
  //   const queryClient = useQueryClient();

  const { mutate: changeProposalStatus, isPending: isChanging } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      //   queryClient.invalidateQueries({
      //     queryKey: ["owner-projects"],
      //   });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { changeProposalStatus, isChanging };
}
