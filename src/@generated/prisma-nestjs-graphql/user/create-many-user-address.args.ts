import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressCreateManyInput } from '../user-address/user-address-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserAddressArgs {

    @Field(() => [UserAddressCreateManyInput], {nullable:false})
    @Type(() => UserAddressCreateManyInput)
    data!: Array<UserAddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
