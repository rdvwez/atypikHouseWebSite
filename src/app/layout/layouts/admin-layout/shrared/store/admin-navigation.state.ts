import {NavigationInterface} from '../model/navigation.interface';

export interface NavigationDashboardState {
  navigations: NavigationInterface[],
  module: ModuleNavigationEnum
}

export enum ModuleNavigationEnum {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  VISITOR = 'VISITOR'
}
