export interface IProps {
  tree: ITree[];
}

export interface ITree {
  treeName: string;
  lower: IFirstBranch[];
}

export interface IFirstBranch {
  field: string;
  fieldLabel?: string;
  lower?: ISecondBranch[];
}

export interface ISecondBranch {
  label: string;
}
