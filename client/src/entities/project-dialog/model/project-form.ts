import type { Project } from 'shared/api';

export type Inputs = Pick<Project, 'description' | 'name'>;

export const inputKeys: (keyof Inputs)[] = ['description', 'name'];

export function isKeyOfInputs(key: string): key is keyof Inputs {
  return inputKeys.includes(key as keyof Inputs);
}
