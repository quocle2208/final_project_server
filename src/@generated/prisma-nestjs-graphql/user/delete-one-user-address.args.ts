import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereUniqueInput } from '../user-address/user-address-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserAddressArgs {

    @Field(() => UserAddressWhereUniqueInput, {nullable:false})
    @Type(() => UserAddressWhereUniqueInput)
    where!: UserAddressWhereUniqueInput;
}
