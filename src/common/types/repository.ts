export interface RepoData {
  created_at: string;
  full_name: string;
  description: string;
  stargazers_count: string;
  id: number;
  owner: Owner;
}
export interface Owner {
  avatar_url: string;
  html_url: string;
}
export interface ListData {
  listData: RepoData;
}

export interface registeredRepoData {
  id: number;
  userName: string;
  repoName: string;
}
