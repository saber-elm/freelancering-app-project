import { useQuery } from "@tanstack/react-query";
import { getListOfProposalsApi } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getListOfProposalsApi,
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
}
