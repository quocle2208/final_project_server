import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereInput } from '../user-address/user-address-where.input';
import { Type } from 'class-transformer';
import { UserAddressOrderByWithRelationInput } from '../user-address/user-address-order-by-with-relation.input';
import { UserAddressWhereUniqueInput } from '../user-address/user-address-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateUserAddressArgs {

    @Field(() => UserAddressWhereInput, {nullable:true})
    @Type(() => UserAddressWhereInput)
    where?: UserAddressWhereInput;

    @Field(() => [UserAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAddressOrderByWithRelationInput>;

    @Field(() => UserAddressWhereUniqueInput, {nullable:true})
    cursor?: UserAddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
