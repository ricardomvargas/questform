export interface TIconButton {
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
