export type AppLink = { title: string; imgId: string; url: string };

export interface TMenu {
  menuIcon: string;
  menuVisible: boolean;
  onMenuClick: Function;
  appLinks: Array<AppLink>;
}
