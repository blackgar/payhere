import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const repositoryListAtom = atom({
  key: 'repository',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
