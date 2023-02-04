import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressUpdateManyMutationInput } from '../user-address/user-address-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserAddressWhereInput } from '../user-address/user-address-where.input';

@ArgsType()
export class UpdateManyUserAddressArgs {

    @Field(() => UserAddressUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAddressUpdateManyMutationInput)
    data!: UserAddressUpdateManyMutationInput;

    @Field(() => UserAddressWhereInput, {nullable:true})
    @Type(() => UserAddressWhereInput)
    where?: UserAddressWhereInput;
}
