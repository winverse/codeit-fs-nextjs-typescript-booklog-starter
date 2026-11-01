import { useMutation } from "@tanstack/react-query";
import { createBook } from "@/lib/api";

function useCreateBookMutation() {
  return useMutation({
    mutationFn: createBook,
  });
}

export default useCreateBookMutation;
