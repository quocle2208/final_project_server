import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserAddressCountAggregate } from './user-address-count-aggregate.output';
import { UserAddressAvgAggregate } from './user-address-avg-aggregate.output';
import { UserAddressSumAggregate } from './user-address-sum-aggregate.output';
import { UserAddressMinAggregate } from './user-address-min-aggregate.output';
import { UserAddressMaxAggregate } from './user-address-max-aggregate.output';

@ObjectType()
export class UserAddressGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    telephone!: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => UserAddressCountAggregate, {nullable:true})
    _count?: UserAddressCountAggregate;

    @Field(() => UserAddressAvgAggregate, {nullable:true})
    _avg?: UserAddressAvgAggregate;

    @Field(() => UserAddressSumAggregate, {nullable:true})
    _sum?: UserAddressSumAggregate;

    @Field(() => UserAddressMinAggregate, {nullable:true})
    _min?: UserAddressMinAggregate;

    @Field(() => UserAddressMaxAggregate, {nullable:true})
    _max?: UserAddressMaxAggregate;
}
