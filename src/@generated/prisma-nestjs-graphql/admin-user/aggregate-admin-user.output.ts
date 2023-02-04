import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminUserCountAggregate } from './admin-user-count-aggregate.output';
import { AdminUserAvgAggregate } from './admin-user-avg-aggregate.output';
import { AdminUserSumAggregate } from './admin-user-sum-aggregate.output';
import { AdminUserMinAggregate } from './admin-user-min-aggregate.output';
import { AdminUserMaxAggregate } from './admin-user-max-aggregate.output';

@ObjectType()
export class AggregateAdminUser {

    @Field(() => AdminUserCountAggregate, {nullable:true})
    _count?: AdminUserCountAggregate;

    @Field(() => AdminUserAvgAggregate, {nullable:true})
    _avg?: AdminUserAvgAggregate;

    @Field(() => AdminUserSumAggregate, {nullable:true})
    _sum?: AdminUserSumAggregate;

    @Field(() => AdminUserMinAggregate, {nullable:true})
    _min?: AdminUserMinAggregate;

    @Field(() => AdminUserMaxAggregate, {nullable:true})
    _max?: AdminUserMaxAggregate;
}
