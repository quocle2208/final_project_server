import { registerEnumType } from '@nestjs/graphql';

export enum AdminUserScalarFieldEnum {
    id = "id",
    username = "username",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    lastLogin = "lastLogin",
    cretedAt = "cretedAt",
    modifiedAt = "modifiedAt",
    roleId = "roleId"
}


registerEnumType(AdminUserScalarFieldEnum, { name: 'AdminUserScalarFieldEnum', description: undefined })
