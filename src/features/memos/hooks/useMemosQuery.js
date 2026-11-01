import { useQuery } from "@tanstack/react-query";
import { getMemos } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useMemosQuery(bookId) {
  return useQuery({
    queryKey: queryKeys.memos.list(bookId),
    queryFn: () => getMemos(bookId),
  });
}

export default useMemosQuery;
