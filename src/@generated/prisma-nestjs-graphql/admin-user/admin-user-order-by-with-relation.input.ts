import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class AdminUserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastLogin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cretedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modifiedAt?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    Role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;
}
