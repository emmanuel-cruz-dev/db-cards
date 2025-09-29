import { useState } from "react";

export const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetToFirstPage = () => {
    setPage(1);
  };

  return {
    currentPage: page,
    setPage,
    handlePageChange,
    resetToFirstPage,
  };
};
