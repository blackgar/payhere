import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const repositoryListAtom = atom({
  key: 'repository',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const registerRepoListAtom = atom({
  key: 'register',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const issueListAtom = atom({
  key: 'issue',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
