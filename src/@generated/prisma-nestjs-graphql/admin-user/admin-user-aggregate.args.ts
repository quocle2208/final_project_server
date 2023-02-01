import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereInput } from './admin-user-where.input';
import { Type } from 'class-transformer';
import { AdminUserOrderByWithRelationInput } from './admin-user-order-by-with-relation.input';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminUserCountAggregateInput } from './admin-user-count-aggregate.input';
import { AdminUserAvgAggregateInput } from './admin-user-avg-aggregate.input';
import { AdminUserSumAggregateInput } from './admin-user-sum-aggregate.input';
import { AdminUserMinAggregateInput } from './admin-user-min-aggregate.input';
import { AdminUserMaxAggregateInput } from './admin-user-max-aggregate.input';

@ArgsType()
export class AdminUserAggregateArgs {

    @Field(() => AdminUserWhereInput, {nullable:true})
    @Type(() => AdminUserWhereInput)
    where?: AdminUserWhereInput;

    @Field(() => [AdminUserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminUserOrderByWithRelationInput>;

    @Field(() => AdminUserWhereUniqueInput, {nullable:true})
    cursor?: AdminUserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminUserCountAggregateInput, {nullable:true})
    _count?: AdminUserCountAggregateInput;

    @Field(() => AdminUserAvgAggregateInput, {nullable:true})
    _avg?: AdminUserAvgAggregateInput;

    @Field(() => AdminUserSumAggregateInput, {nullable:true})
    _sum?: AdminUserSumAggregateInput;

    @Field(() => AdminUserMinAggregateInput, {nullable:true})
    _min?: AdminUserMinAggregateInput;

    @Field(() => AdminUserMaxAggregateInput, {nullable:true})
    _max?: AdminUserMaxAggregateInput;
}
