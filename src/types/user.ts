export interface User {
  id: string;
  name: string;
  email: string;
  role: number;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "hello@mock.com",
    role: 1,
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "hello@mock.com",
    role: 2,
  },
  {
    id: "3",
    name: "Max Lee",
    email: "hello@mock.com",
    role: 3,
  },
];
