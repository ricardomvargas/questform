export type TButtonSkin =
  | 'save'
  | 'publish'
  | 'cancel'
  | 'delete'
  | 'finish'
  | 'login'
  | undefined;

export interface TButton {
  text: string;
  name: string;
  skin?: ButtonSkin;
  isSubmit?: boolean | undefined;
}
