import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserPayment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:false})
    provider!: string;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
