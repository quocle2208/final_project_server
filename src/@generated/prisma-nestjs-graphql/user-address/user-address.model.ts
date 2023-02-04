import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserAddress {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2!: string | null;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    postalCode!: string | null;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    telephone!: string;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
