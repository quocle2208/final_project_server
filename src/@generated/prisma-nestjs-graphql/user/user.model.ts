import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserAddress } from '../user-address/user-address.model';
import { UserPayment } from '../user-payment/user-payment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    telephone!: string;

    @Field(() => Date, {nullable:false})
    cretedAt!: Date;

    @Field(() => Date, {nullable:true})
    modifiedAt!: Date | null;

    @Field(() => [UserAddress], {nullable:true})
    userAdrses?: Array<UserAddress>;

    @Field(() => [UserPayment], {nullable:true})
    userPayments?: Array<UserPayment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
