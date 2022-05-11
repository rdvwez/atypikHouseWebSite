export interface User {
    _id:string;
    name:string;
    firstname:string;
    email:string;
    password: string;
    role: string;
    dateNaiss: string;
    state: boolean;
    img?: string
}