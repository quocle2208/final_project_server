import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentCreateWithoutUserInput } from './user-payment-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPaymentCreateOrConnectWithoutUserInput } from './user-payment-create-or-connect-without-user.input';
import { UserPaymentCreateManyUserInputEnvelope } from './user-payment-create-many-user-input-envelope.input';
import { UserPaymentWhereUniqueInput } from './user-payment-where-unique.input';

@InputType()
export class UserPaymentUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserPaymentCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentCreateWithoutUserInput)
    create?: Array<UserPaymentCreateWithoutUserInput>;

    @Field(() => [UserPaymentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPaymentCreateOrConnectWithoutUserInput>;

    @Field(() => UserPaymentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPaymentCreateManyUserInputEnvelope)
    createMany?: UserPaymentCreateManyUserInputEnvelope;

    @Field(() => [UserPaymentWhereUniqueInput], {nullable:true})
    @Type(() => UserPaymentWhereUniqueInput)
    connect?: Array<UserPaymentWhereUniqueInput>;
}
