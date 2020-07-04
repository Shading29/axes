export interface IList {
  list?: IListItem[];
}

export interface IListItem {
  treeName: string;
  lower: IListItem2[];
}

interface IListItem2 {
  field: string;
  fieldLabel: string;
}
