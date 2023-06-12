export interface BaseUser {
    firstName: string;
    lastName: string;
    email: string;
}

export interface User extends BaseUser {
    _id: string;
}
