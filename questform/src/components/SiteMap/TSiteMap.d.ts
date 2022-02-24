export type SiteMapOption = {
  title: string;
  description: string;
  route?: string;
};

export interface TSiteMap {
  options: SiteMapOption[];
}
