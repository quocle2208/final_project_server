
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    cretedAt?: Nullable<DateTime>;
    modifiedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
