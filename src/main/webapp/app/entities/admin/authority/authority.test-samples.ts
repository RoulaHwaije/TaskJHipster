import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ffc7ce95-4ba8-4145-892c-a16be5395447',
};

export const sampleWithPartialData: IAuthority = {
  name: '18618f6d-192c-42c1-b220-13aa643d9a3e',
};

export const sampleWithFullData: IAuthority = {
  name: '4362bbf7-f199-49ef-9a74-b2dfa2f2885b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
