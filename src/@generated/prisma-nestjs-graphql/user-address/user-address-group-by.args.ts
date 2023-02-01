import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAddressWhereInput } from './user-address-where.input';
import { Type } from 'class-transformer';
import { UserAddressOrderByWithAggregationInput } from './user-address-order-by-with-aggregation.input';
import { UserAddressScalarFieldEnum } from './user-address-scalar-field.enum';
import { UserAddressScalarWhereWithAggregatesInput } from './user-address-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserAddressCountAggregateInput } from './user-address-count-aggregate.input';
import { UserAddressAvgAggregateInput } from './user-address-avg-aggregate.input';
import { UserAddressSumAggregateInput } from './user-address-sum-aggregate.input';
import { UserAddressMinAggregateInput } from './user-address-min-aggregate.input';
import { UserAddressMaxAggregateInput } from './user-address-max-aggregate.input';

@ArgsType()
export class UserAddressGroupByArgs {

    @Field(() => UserAddressWhereInput, {nullable:true})
    @Type(() => UserAddressWhereInput)
    where?: UserAddressWhereInput;

    @Field(() => [UserAddressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserAddressOrderByWithAggregationInput>;

    @Field(() => [UserAddressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserAddressScalarFieldEnum>;

    @Field(() => UserAddressScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserAddressScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserAddressCountAggregateInput, {nullable:true})
    _count?: UserAddressCountAggregateInput;

    @Field(() => UserAddressAvgAggregateInput, {nullable:true})
    _avg?: UserAddressAvgAggregateInput;

    @Field(() => UserAddressSumAggregateInput, {nullable:true})
    _sum?: UserAddressSumAggregateInput;

    @Field(() => UserAddressMinAggregateInput, {nullable:true})
    _min?: UserAddressMinAggregateInput;

    @Field(() => UserAddressMaxAggregateInput, {nullable:true})
    _max?: UserAddressMaxAggregateInput;
}
