


export class User  {

    constructor(
        public name: string,
        public role: string,
        public email: string,
        public isGoogle: boolean,
        public image?: string,
        public isOnline?: boolean,
        public lastname?: string,
        public id?: number,
    ){}
}
