import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    telephone = "telephone",
    cretedAt = "cretedAt",
    modifiedAt = "modifiedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
