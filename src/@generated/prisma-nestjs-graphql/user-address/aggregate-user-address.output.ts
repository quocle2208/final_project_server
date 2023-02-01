import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserAddressCountAggregate } from './user-address-count-aggregate.output';
import { UserAddressAvgAggregate } from './user-address-avg-aggregate.output';
import { UserAddressSumAggregate } from './user-address-sum-aggregate.output';
import { UserAddressMinAggregate } from './user-address-min-aggregate.output';
import { UserAddressMaxAggregate } from './user-address-max-aggregate.output';

@ObjectType()
export class AggregateUserAddress {

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
