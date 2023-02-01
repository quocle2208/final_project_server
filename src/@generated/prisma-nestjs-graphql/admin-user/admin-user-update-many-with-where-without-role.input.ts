import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserScalarWhereInput } from './admin-user-scalar-where.input';
import { Type } from 'class-transformer';
import { AdminUserUpdateManyMutationInput } from './admin-user-update-many-mutation.input';

@InputType()
export class AdminUserUpdateManyWithWhereWithoutRoleInput {

    @Field(() => AdminUserScalarWhereInput, {nullable:false})
    @Type(() => AdminUserScalarWhereInput)
    where!: AdminUserScalarWhereInput;

    @Field(() => AdminUserUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminUserUpdateManyMutationInput)
    data!: AdminUserUpdateManyMutationInput;
}
