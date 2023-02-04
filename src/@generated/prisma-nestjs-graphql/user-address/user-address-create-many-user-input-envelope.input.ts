import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressCreateManyUserInput } from './user-address-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserAddressCreateManyUserInputEnvelope {

    @Field(() => [UserAddressCreateManyUserInput], {nullable:false})
    @Type(() => UserAddressCreateManyUserInput)
    data!: Array<UserAddressCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
