export interface ErrorMessageProps {
  error: Error;
  entity: string;
  onRetry: () => void;
}

export interface PaginationItemProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}
