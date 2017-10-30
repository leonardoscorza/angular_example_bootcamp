export class User {
    id: number;
    name: string;
    email: string;

    constructor(userInfo:any) {
        this.id = userInfo.id;
        this.name = userInfo.name;
        this.email = userInfo.email;
    }
}