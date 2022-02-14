export class User {
  id: number;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
  tokenType: string;


  constructor(id: number, username: string, email: string, roles: string[], accessToken: string, tokenType: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.roles = roles;
    this.accessToken = accessToken;
    this.tokenType = tokenType;
  }
}
