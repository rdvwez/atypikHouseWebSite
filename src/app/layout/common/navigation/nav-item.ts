export interface NavItem {
  id: number;
  path: string;
  title?: string;
  titleIcon?: string;
  // isButton with customm class
  isButton: boolean;
  customClass?: String;
  isActive: boolean;
  icon?: string;
  isAuthenticated?: boolean
}
