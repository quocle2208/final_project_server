import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdminUserCountAggregate } from './admin-user-count-aggregate.output';
import { AdminUserAvgAggregate } from './admin-user-avg-aggregate.output';
import { AdminUserSumAggregate } from './admin-user-sum-aggregate.output';
import { AdminUserMinAggregate } from './admin-user-min-aggregate.output';
import { AdminUserMaxAggregate } from './admin-user-max-aggregate.output';

@ObjectType()
export class AdminUserGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    lastLogin!: Date | string;

    @Field(() => Date, {nullable:false})
    cretedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    modifiedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    roleId?: number;

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
