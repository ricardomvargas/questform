export interface TDataTablePaginator {
  totalItens: number;
  itensPerPage: number;
  pageSectionsSize: number;
  currentPage?: number;
  setCurrentPage?: Function;
}
