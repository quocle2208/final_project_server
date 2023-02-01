import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminUser {

    @Field(() => ID, {nullable:false})
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
    lastLogin!: Date;

    @Field(() => Date, {nullable:false})
    cretedAt!: Date;

    @Field(() => Date, {nullable:false})
    modifiedAt!: Date;

    @Field(() => Role, {nullable:true})
    Role?: Role | null;

    @Field(() => Int, {nullable:true})
    roleId!: number | null;
}
