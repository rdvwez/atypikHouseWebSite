import {NavigationInterface} from '../model/navigation.interface';
import {ADMIN_MENU_NAVIGATION_ADMIN_CONST} from './admin-layout.const';
import {VALUE_CONST} from '../../../../../modules/admin/value/shared/constant/data.constant';
import {USERS_CONST} from '../../../../../modules/admin/users/shared/constant/data.constant';
import {HOUSE_CONST} from '../../../../../modules/admin/house/shared/constant/data.constant';
import {PROPERTY_CONST} from '../../../../../modules/admin/property/shared/constant/property.constant';
import {DataCategoryConstant} from '../../../../../modules/admin/category/shared/constant/data.constant';

export const ADMIN_DASHBOARD: NavigationInterface[] = [
  {
    id: 1,
    path: '/admin/home',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.home,
    classIcon: 'bi-house-door',
    isActive: true,
  },
  {
    id: 2,
    path: '/admin/category',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.category,
    classIcon: 'bi-grid-1x2',
    isActive: false,
    titleList: DataCategoryConstant.wording.titleList,
    urlAdd: '/admin/category/form'
  },
  {
    id: 3,
    path: '/admin/thematic',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.thematic,
    classIcon: 'bi-grid-1x2',
    isActive: false,
  },
  {
    id: 4,
    path: '/admin/property',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.property,
    classIcon: 'bi-grid-1x2',
    isActive: false,
    titleList: PROPERTY_CONST.wording.titleList
  },
  {
    id: 5,
    path: '/admin/value',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.value,
    classIcon: 'bi-back',
    isActive: false,
    titleList: VALUE_CONST.wording.titleList,
    urlAdd: '/admin/value/form'
  },
  {
    id: 6,
    path: '/admin/house',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.house,
    classIcon: 'bi-h-square',
    isActive: false,
    titleList: HOUSE_CONST.wording.titleList
  },
  {
    id: 7,
    path: '/admin/users',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.user,
    classIcon: 'bi-people',
    isActive: false,
    titleList: USERS_CONST.wording.titleList
  }
];

export const OWNER_DASHBOARD: NavigationInterface[] = [
  {
    id: 1,
    path: '/owner/reservations',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.reservation,
    classIcon: 'bi-calendar2',
    isActive: true,
  },
  {
    id: 2,
    path: '/owner/house',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.house,
    classIcon: 'bi-h-square',
    isActive: false,
    titleList: HOUSE_CONST.wording.titleList,
    urlAdd: '/owner/house/form'
  },
  {
    id: 3,
    path: '/owner/value',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.value,
    classIcon: 'bi-grid-1x2',
    isActive: false,
    titleList: VALUE_CONST.wording.titleList,
    urlAdd: '/owner/value/form'
  },
  {
    id: 4,
    path: '/owner/compte',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.account,
    classIcon: 'bi-person-circle',
    isActive: false,
  },
  {
    id: 5,
    path: '/owner/logout',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.logout,
    classIcon: 'bi-box-arrow-right',
    isActive: false,
  }
];

export const CLIENT_DASHBOARD: NavigationInterface[] = [
  {
    id: 1,
    path: '/client/reservations',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.reservation,
    classIcon: 'bi-calendar2',
    isActive: true,
  },
  {
    id: 4,
    path: '/client/compte',
    title: ADMIN_MENU_NAVIGATION_ADMIN_CONST.wording.account,
    classIcon: 'bi-person-circle',
    isActive: false,
  },
]
