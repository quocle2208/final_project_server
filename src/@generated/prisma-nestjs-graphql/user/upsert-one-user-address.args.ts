import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereUniqueInput } from '../user-address/user-address-where-unique.input';
import { Type } from 'class-transformer';
import { UserAddressCreateInput } from '../user-address/user-address-create.input';
import { UserAddressUpdateInput } from '../user-address/user-address-update.input';

@ArgsType()
export class UpsertOneUserAddressArgs {

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;

    @Field(() => UserAddressCreateInput, {nullable:false})
    @Type(() => UserAddressCreateInput)
    create!: UserAddressCreateInput;

    @Field(() => UserAddressUpdateInput, {nullable:false})
    @Type(() => UserAddressUpdateInput)
    update!: UserAddressUpdateInput;
}
