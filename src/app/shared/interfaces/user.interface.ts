export interface User {
    _id?:string;
    email:string;
    roles: string[];
    password?: string;
    reopetedPassword?: string;
    name:string;
    firstname:string;
    birthDate?: string;
    gender: string;
    phoneNumber?: string;
    fileUrl: string;
    stayConnecteed?: boolean;
    stayInformed?: boolean;
}