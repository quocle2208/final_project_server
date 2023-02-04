import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserPaymentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    paymentType?: true;

    @Field(() => Boolean, {nullable:true})
    provider?: true;

    @Field(() => Boolean, {nullable:true})
    account?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
