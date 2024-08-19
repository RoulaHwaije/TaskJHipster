import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 15558,
  title: 'in small',
};

export const sampleWithPartialData: ITask = {
  id: 120,
  title: 'anti',
};

export const sampleWithFullData: ITask = {
  id: 31762,
  title: 'self-assured mysteriously',
  description: 'pro gadzooks blah',
  dueDate: dayjs('2024-08-19'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  title: 'sari yawningly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
