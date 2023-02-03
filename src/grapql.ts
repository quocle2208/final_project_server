
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginAdminInput {
    username: string;
    password: string;
}

export class UserCreateInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    telephone?: Nullable<string>;
}

export class CreateAdminInput {
    username: string;
    firstName: string;
    lastName: string;
    lastLogin?: Nullable<DateTime>;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
}

export class LoginUserInput {
    username: string;
    password: string;
}

export class CreateUserInput {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    id: number;
}

export class LoginAdminReponse {
    access_token: string;
    admin: Admin;
}

export abstract class IMutation {
    abstract loginAdmin(loginAdminInput: LoginAdminInput): LoginReponse | Promise<LoginReponse>;

    abstract createAdmin(createAdminInput: CreateAdminInput): Admin | Promise<Admin>;

    abstract login(loginUserInput: LoginUserInput): LoginReponse | Promise<LoginReponse>;

    abstract signup(signUpUserInput: UserCreateInput): User | Promise<User>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Admin {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    lastLogin?: Nullable<DateTime>;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract admin(username: string): Nullable<Admin> | Promise<Nullable<Admin>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export class LoginReponse {
    access_token: string;
    user: User;
}

export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
