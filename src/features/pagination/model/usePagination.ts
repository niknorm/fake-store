import { useState } from "react";

export function usePagination(limit: number) {
  const [page, setPage] = useState(0);

  const offset = page * limit;
  const next = () => setPage((prev) => prev + 1);
  const prev = () => setPage((prev) => Math.max(prev - 1, 0));

  return { page, offset, next, prev, setPage };
}
