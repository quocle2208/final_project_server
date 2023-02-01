import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdminUser } from '../admin-user/admin-user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    roleType!: string;

    @Field(() => String, {nullable:false})
    permissions!: string;

    @Field(() => [AdminUser], {nullable:true})
    admins?: Array<AdminUser>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
