import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserWhereInput } from './admin-user-where.input';
import { Type } from 'class-transformer';
import { AdminUserOrderByWithRelationInput } from './admin-user-order-by-with-relation.input';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminUserScalarFieldEnum } from './admin-user-scalar-field.enum';

@ArgsType()
export class FindFirstAdminUserArgs {

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

    @Field(() => [AdminUserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminUserScalarFieldEnum>;
}
