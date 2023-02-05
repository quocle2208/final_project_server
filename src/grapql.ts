
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAdminInput {
    username: string;
    firstName: string;
    lastName: string;
    lastLogin?: Nullable<DateTime>;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
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

export abstract class IMutation {
    abstract createAdmin(createAdminInput: CreateAdminInput): Admin | Promise<Admin>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
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
