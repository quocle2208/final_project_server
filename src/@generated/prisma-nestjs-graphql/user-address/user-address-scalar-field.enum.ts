import { registerEnumType } from '@nestjs/graphql';

export enum UserAddressScalarFieldEnum {
    id = "id",
    address1 = "address1",
    address2 = "address2",
    city = "city",
    postalCode = "postalCode",
    country = "country",
    telephone = "telephone",
    userId = "userId"
}


registerEnumType(UserAddressScalarFieldEnum, { name: 'UserAddressScalarFieldEnum', description: undefined })
