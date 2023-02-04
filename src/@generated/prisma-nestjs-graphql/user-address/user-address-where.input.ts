import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserAddressWhereInput {

    @Field(() => [UserAddressWhereInput], {nullable:true})
    AND?: Array<UserAddressWhereInput>;

    @Field(() => [UserAddressWhereInput], {nullable:true})
    OR?: Array<UserAddressWhereInput>;

    @Field(() => [UserAddressWhereInput], {nullable:true})
    NOT?: Array<UserAddressWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    address1?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address2?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telephone?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
