import { Exclude } from 'class-transformer';

export class User {
  id: number;
  username: string;
  @Exclude()
  password: string;
  displayName: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'anna',
    password: 'pass',
    displayName: 'Anna',
  },
  {
    id: 2,
    username: 'harry',
    password: 'pass123',
    displayName: 'Harry',
  },
];
