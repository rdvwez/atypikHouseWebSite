export interface User {
    _id?:string;
    email:string;
    role?: string;
    password?: string;
    reopetedPassword?: string;
    name:string;
    firstname:string;
    birthDate?: string;
    gender?: string;
    phoneNumber?: string;
    img?: string;
    stayConnecteed?: boolean;
    stayInformed?: boolean;
}