import { useMemo, useState } from "react";

export function useSearch<T>(items: T[], getText: (item: T) => string) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query) return items;

    return items.filter((item) =>
      getText(item).toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query, getText]);

  return {
    query,
    setQuery,
    filteredItems,
  };
}
