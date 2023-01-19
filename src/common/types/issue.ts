export interface IssueListData {
  comments: number;
  created_at: string;
  number: number;
  id: number;
  user: Owner;
  title: string;
  html_url: string;
}
export interface Owner {
  avatar_url: string;
  login: string;
}

export interface ListItemData {
  listData: IssueListData;
}
