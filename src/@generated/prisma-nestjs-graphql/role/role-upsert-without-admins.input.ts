import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutAdminsInput } from './role-update-without-admins.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutAdminsInput } from './role-create-without-admins.input';

@InputType()
export class RoleUpsertWithoutAdminsInput {

    @Field(() => RoleUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutAdminsInput)
    update!: RoleUpdateWithoutAdminsInput;

    @Field(() => RoleCreateWithoutAdminsInput, {nullable:false})
    @Type(() => RoleCreateWithoutAdminsInput)
    create!: RoleCreateWithoutAdminsInput;
}
