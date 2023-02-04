import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereInput } from './user-address-where.input';
import { Type } from 'class-transformer';
import { UserAddressOrderByWithRelationInput } from './user-address-order-by-with-relation.input';
import { UserAddressWhereUniqueInput } from './user-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAddressScalarFieldEnum } from './user-address-scalar-field.enum';

@ArgsType()
export class FindManyUserAddressArgs {

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

    @Field(() => [UserAddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserAddressScalarFieldEnum>;
}
