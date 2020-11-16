export class UserForAuthenticationDto {

    constructor(
        private idToken: string,
        ) {}
}
export class UserDto  {

    constructor(
        public  idToken: string,
        public  firstName: string,
        public  lastName: string,
        public  email: string
        ) {}
}