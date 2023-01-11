import Country from '../interfaces/country';

export default class User {
  constructor(
    public username: string,
    public password: string | number,
    public confirmatedPassword: string | number,
    public email: string,
    public country: Country,
    public subscription: boolean,
    public city: string,
    public id: number
  ) {}
}
