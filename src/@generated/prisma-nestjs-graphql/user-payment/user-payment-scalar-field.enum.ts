import { registerEnumType } from '@nestjs/graphql';

export enum UserPaymentScalarFieldEnum {
    id = "id",
    paymentType = "paymentType",
    provider = "provider",
    account = "account",
    userId = "userId"
}


registerEnumType(UserPaymentScalarFieldEnum, { name: 'UserPaymentScalarFieldEnum', description: undefined })
