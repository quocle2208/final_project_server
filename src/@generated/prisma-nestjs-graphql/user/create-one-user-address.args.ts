import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressCreateInput } from '../user-address/user-address-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserAddressArgs {

    @Field(() => UserAddressCreateInput, {nullable:false})
    @Type(() => UserAddressCreateInput)
    data!: UserAddressCreateInput;
}
