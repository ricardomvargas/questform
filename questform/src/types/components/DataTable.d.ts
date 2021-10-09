export type ListItem = {
  id: number;
  mainContent: string;
  subContent?: text;
  status?: string;
};

export type MoreOption = { title: string; url: string; onClick?: Function };

export interface TDataTable {
  listTitle?: string;
  dataList: Array<ListItem>;
  totalItens: number;
  currentPage?: number;
  setCurrentPage?: Function;
  hideTitle?: boolean;
  moreOptions?: Array<MoreOption> | undefined;
  hideMoreOptions?: boolean | undefined;
  filterAction?: Function;
  searchAction?: Function;
  newItemAction?: Function;
  newItemUrl?: string;
  deleteAction?: Function;
  itensPerPage?: number;
  sectionSize?: number;
}
