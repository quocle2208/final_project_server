import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereInput } from '../user-address/user-address-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserAddressArgs {

    @Field(() => UserAddressWhereInput, {nullable:true})
    @Type(() => UserAddressWhereInput)
    where?: UserAddressWhereInput;
}
