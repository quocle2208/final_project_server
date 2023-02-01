import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserCreateWithoutRoleInput } from './admin-user-create-without-role.input';
import { Type } from 'class-transformer';
import { AdminUserCreateOrConnectWithoutRoleInput } from './admin-user-create-or-connect-without-role.input';
import { AdminUserUpsertWithWhereUniqueWithoutRoleInput } from './admin-user-upsert-with-where-unique-without-role.input';
import { AdminUserCreateManyRoleInputEnvelope } from './admin-user-create-many-role-input-envelope.input';
import { AdminUserWhereUniqueInput } from './admin-user-where-unique.input';
import { AdminUserUpdateWithWhereUniqueWithoutRoleInput } from './admin-user-update-with-where-unique-without-role.input';
import { AdminUserUpdateManyWithWhereWithoutRoleInput } from './admin-user-update-many-with-where-without-role.input';
import { AdminUserScalarWhereInput } from './admin-user-scalar-where.input';

@InputType()
export class AdminUserUpdateManyWithoutRoleNestedInput {

    @Field(() => [AdminUserCreateWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserCreateWithoutRoleInput)
    create?: Array<AdminUserCreateWithoutRoleInput>;

    @Field(() => [AdminUserCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<AdminUserCreateOrConnectWithoutRoleInput>;

    @Field(() => [AdminUserUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<AdminUserUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => AdminUserCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => AdminUserCreateManyRoleInputEnvelope)
    createMany?: AdminUserCreateManyRoleInputEnvelope;

    @Field(() => [AdminUserWhereUniqueInput], {nullable:true})
    @Type(() => AdminUserWhereUniqueInput)
    set?: Array<AdminUserWhereUniqueInput>;

    @Field(() => [AdminUserWhereUniqueInput], {nullable:true})
    @Type(() => AdminUserWhereUniqueInput)
    disconnect?: Array<AdminUserWhereUniqueInput>;

    @Field(() => [AdminUserWhereUniqueInput], {nullable:true})
    @Type(() => AdminUserWhereUniqueInput)
    delete?: Array<AdminUserWhereUniqueInput>;

    @Field(() => [AdminUserWhereUniqueInput], {nullable:true})
    @Type(() => AdminUserWhereUniqueInput)
    connect?: Array<AdminUserWhereUniqueInput>;

    @Field(() => [AdminUserUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<AdminUserUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [AdminUserUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => AdminUserUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<AdminUserUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [AdminUserScalarWhereInput], {nullable:true})
    @Type(() => AdminUserScalarWhereInput)
    deleteMany?: Array<AdminUserScalarWhereInput>;
}
