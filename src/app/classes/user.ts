import Country from '../interfaces/country';

export default class User {
  constructor(
    public username: string,
    public mail: string,
    public country: Country,
    public subscription: boolean,
    public city: string
  ) {}
}
