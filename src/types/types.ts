export interface RouteType {
  path: string;
  component: any;
  exact: boolean;
  isPublic: boolean;
}

export interface User {
    id: number;
    name: string;
}