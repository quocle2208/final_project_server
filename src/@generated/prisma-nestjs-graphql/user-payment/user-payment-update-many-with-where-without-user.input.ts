import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentScalarWhereInput } from './user-payment-scalar-where.input';
import { Type } from 'class-transformer';
import { UserPaymentUpdateManyMutationInput } from './user-payment-update-many-mutation.input';

@InputType()
export class UserPaymentUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserPaymentScalarWhereInput, {nullable:false})
    @Type(() => UserPaymentScalarWhereInput)
    where!: UserPaymentScalarWhereInput;

    @Field(() => UserPaymentUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPaymentUpdateManyMutationInput)
    data!: UserPaymentUpdateManyMutationInput;
}
