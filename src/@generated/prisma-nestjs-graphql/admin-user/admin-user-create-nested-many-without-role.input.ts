import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserCreateWithoutRoleInput } from './admin-user-create-without-role.input';
import { Type } from 'class-transformer';
import { AdminUserCreateOrConnectWithoutRoleInput } from './admin-user-create-or-connect-without-role.input';
import { AdminUserCreateManyRoleInputEnvelope } from './admin-user-create-many-role-input-envelope.input';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';

@InputType()
export class AdminUserCreateNestedManyWithoutRoleInput {

    @Field(() => [AdminUserCreateWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserCreateWithoutRoleInput)
    create?: Array<AdminUserCreateWithoutRoleInput>;

    @Field(() => [AdminUserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<AdminUserCreateOrConnectWithoutRoleInput>;

    @Field(() => AdminUserCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => AdminUserCreateManyRoleInputEnvelope)
    createMany?: AdminUserCreateManyRoleInputEnvelope;

    @Field(() => [AdminUserWhereUniqueInput], {nullable:true})
    @Type(() => AdminUserWhereUniqueInput)
    connect?: Array<AdminUserWhereUniqueInput>;
}
