import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPaymentCreateManyUserInput } from './user-payment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPaymentCreateManyUserInputEnvelope {

    @Field(() => [UserPaymentCreateManyUserInput], {nullable:false})
    @Type(() => UserPaymentCreateManyUserInput)
    data!: Array<UserPaymentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
