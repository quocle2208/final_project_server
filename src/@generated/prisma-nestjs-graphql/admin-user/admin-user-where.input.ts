import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AdminUserWhereInput {

    @Field(() => [AdminUserWhereInput], {nullable:true})
    AND?: Array<AdminUserWhereInput>;

    @Field(() => [AdminUserWhereInput], {nullable:true})
    OR?: Array<AdminUserWhereInput>;

    @Field(() => [AdminUserWhereInput], {nullable:true})
    NOT?: Array<AdminUserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastLogin?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cretedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    modifiedAt?: DateTimeFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    Role?: RoleRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    roleId?: IntNullableFilter;
}
