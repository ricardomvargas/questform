declare namespace ComponentsProps {
  /********** TYPES **********/
  type AppLink = { title: string; imgId: string; url: string };
  type ListItem = {
    id: number;
    mainContent: string;
    subContent?: text;
    status?: string;
  };
  type MoreOption = { title: string; url: string; onClick?: Function };
  type PaginatorButton = { pageNumber: number; isCurrentPage: boolean };
  type PaginatorGoToPageButton = { goTo: number; isCurrentPage: boolean };
  type SiteMapOption = {
    title: string;
    description: string;
    route?: string;
  };

  /********** INTERFACES **********/
  interface Header {
    profilePicture: string;
    profileName: string;
    languagePicker?: React.ReactNode;
  }

  interface Menu {
    menuIcon: string;
    menuVisible: boolean;
    onMenuClick: Function;
    appLinks: Array<AppLink>;
  }

  interface Button {
    text: string;
    name: string;
    skin?: 'save' | 'publish' | 'cancel' | 'delete' | 'finish' | 'login';
    isSubmit?: boolean | undefined;
  }

  interface DashboardCard {
    skin: 'purple' | 'green' | 'blue' | 'red';
    title: string;
    content: string;
    url?: string;
  }

  interface DataTable {
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

  interface DataTablePaginator {
    totalItens: number;
    itensPerPage: number;
    pageSectionsSize: number;
    currentPage?: number;
    setCurrentPage?: Function;
  }

  interface IconButton {
    buttonType:
      | 'add'
      | 'deleteItem'
      | 'filter'
      | 'search'
      | 'moreOptionsVertical'
      | 'moreOptionsHorizontal'
      | 'menu'
      | 'close'
      | 'arrowLeft'
      | 'arrowRight';
    url?: string;
    onClickAction?: Function;
    idName?: string;
    title?: string;
    color?: 'light' | 'dark' | 'red';
  }

  interface SurveyStatus {
    status?: string;
    displayShadow?: boolean;
  }

  interface SiteMap {
    options: SiteMapOption[];
  }
}
