import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAddressScalarWhereInput } from './user-address-scalar-where.input';
import { Type } from 'class-transformer';
import { UserAddressUpdateManyMutationInput } from './user-address-update-many-mutation.input';

@InputType()
export class UserAddressUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserAddressScalarWhereInput, {nullable:false})
    @Type(() => UserAddressScalarWhereInput)
    where!: UserAddressScalarWhereInput;

    @Field(() => UserAddressUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAddressUpdateManyMutationInput)
    data!: UserAddressUpdateManyMutationInput;
}
