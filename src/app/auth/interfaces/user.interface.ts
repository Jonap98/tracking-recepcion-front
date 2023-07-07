export interface Users {
  usuarios: User[]
}

export interface User {
  id: number,
  name: string,
  email: string,
  password?: string,
  user?: {
    name: string,
    email: string
  }
  token?: string,
}
