export interface RepoData {
  created_at: string;
  full_name: string;
  description: string;
  stargazers_count: string;
  id: number;
  owner: Owner;
  html_url: string;
}
export interface Owner {
  avatar_url: string;
}
export interface ListData {
  listData: RepoData;
}

export interface registeredRepoData {
  id: number;
  html_url: string;
  userName: string;
  repoName: string;
}
