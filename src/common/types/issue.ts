export interface IssueListData {
  comments: number;
  created_at: string;
  number: number;
  user: Owner;
  title: string;
}
export interface Owner {
  avatar_url: string;
  login: string;
}
