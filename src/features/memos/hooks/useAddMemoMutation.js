import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMemo } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useAddMemoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMemo,
    onSuccess: (memo) =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.memos.list(memo.bookId),
      }),
  });
}

export default useAddMemoMutation;
