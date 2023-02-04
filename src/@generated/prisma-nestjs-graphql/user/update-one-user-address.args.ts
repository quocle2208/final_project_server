import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressUpdateInput } from '../user-address/user-address-update.input';
import { Type } from 'class-transformer';
import { UserAddressWhereUniqueInput } from '../user-address/user-address-where-unique.input';

@ArgsType()
export class UpdateOneUserAddressArgs {

    @Field(() => UserAddressUpdateInput, {nullable:false})
    @Type(() => UserAddressUpdateInput)
    data!: UserAddressUpdateInput;

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;
}
