import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereInput } from './admin-user-where.input';
import { Type } from 'class-transformer';
import { AdminUserOrderByWithAggregationInput } from './admin-user-order-by-with-aggregation.input';
import { AdminUserScalarFieldEnum } from './admin-user-scalar-field.enum';
import { AdminUserScalarWhereWithAggregatesInput } from './admin-user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminUserCountAggregateInput } from './admin-user-count-aggregate.input';
import { AdminUserAvgAggregateInput } from './admin-user-avg-aggregate.input';
import { AdminUserSumAggregateInput } from './admin-user-sum-aggregate.input';
import { AdminUserMinAggregateInput } from './admin-user-min-aggregate.input';
import { AdminUserMaxAggregateInput } from './admin-user-max-aggregate.input';

@ArgsType()
export class AdminUserGroupByArgs {

    @Field(() => AdminUserWhereInput, {nullable:true})
    @Type(() => AdminUserWhereInput)
    where?: AdminUserWhereInput;

    @Field(() => [AdminUserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminUserOrderByWithAggregationInput>;

    @Field(() => [AdminUserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminUserScalarFieldEnum>;

    @Field(() => AdminUserScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminUserScalarWhereWithAggregatesInput;

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
