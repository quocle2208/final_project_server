import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentCreateWithoutUserInput } from './user-payment-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPaymentCreateOrConnectWithoutUserInput } from './user-payment-create-or-connect-without-user.input';
import { UserPaymentUpsertWithWhereUniqueWithoutUserInput } from './user-payment-upsert-with-where-unique-without-user.input';
import { UserPaymentCreateManyUserInputEnvelope } from './user-payment-create-many-user-input-envelope.input';
import { UserPaymentWhereUniqueInput } from './user-payment-where-unique.input';
import { UserPaymentUpdateWithWhereUniqueWithoutUserInput } from './user-payment-update-with-where-unique-without-user.input';
import { UserPaymentUpdateManyWithWhereWithoutUserInput } from './user-payment-update-many-with-where-without-user.input';
import { UserPaymentScalarWhereInput } from './user-payment-scalar-where.input';

@InputType()
export class UserPaymentUpdateManyWithoutUserNestedInput {

    @Field(() => [UserPaymentCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentCreateWithoutUserInput)
    create?: Array<UserPaymentCreateWithoutUserInput>;

    @Field(() => [UserPaymentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPaymentCreateOrConnectWithoutUserInput>;

    @Field(() => [UserPaymentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserPaymentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserPaymentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPaymentCreateManyUserInputEnvelope)
    createMany?: UserPaymentCreateManyUserInputEnvelope;

    @Field(() => [UserPaymentWhereUniqueInput], {nullable:true})
    @Type(() => UserPaymentWhereUniqueInput)
    set?: Array<UserPaymentWhereUniqueInput>;

    @Field(() => [UserPaymentWhereUniqueInput], {nullable:true})
    @Type(() => UserPaymentWhereUniqueInput)
    disconnect?: Array<UserPaymentWhereUniqueInput>;

    @Field(() => [UserPaymentWhereUniqueInput], {nullable:true})
    @Type(() => UserPaymentWhereUniqueInput)
    delete?: Array<UserPaymentWhereUniqueInput>;

    @Field(() => [UserPaymentWhereUniqueInput], {nullable:true})
    @Type(() => UserPaymentWhereUniqueInput)
    connect?: Array<UserPaymentWhereUniqueInput>;

    @Field(() => [UserPaymentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserPaymentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserPaymentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserPaymentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserPaymentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserPaymentScalarWhereInput], {nullable:true})
    @Type(() => UserPaymentScalarWhereInput)
    deleteMany?: Array<UserPaymentScalarWhereInput>;
}
