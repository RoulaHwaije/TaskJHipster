import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 14024,
  login: '{+!@TyNW',
};

export const sampleWithPartialData: IUser = {
  id: 19996,
  login: 'GPPWW',
};

export const sampleWithFullData: IUser = {
  id: 9540,
  login: '3@xb\\^1uV\\?YxdKnQ\\<3j',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
