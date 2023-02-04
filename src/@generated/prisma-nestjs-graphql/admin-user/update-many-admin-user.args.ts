import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserUpdateManyMutationInput } from './admin-user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminUserWhereInput } from './admin-user-where.input';

@ArgsType()
export class UpdateManyAdminUserArgs {

    @Field(() => AdminUserUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminUserUpdateManyMutationInput)
    data!: AdminUserUpdateManyMutationInput;

    @Field(() => AdminUserWhereInput, {nullable:true})
    @Type(() => AdminUserWhereInput)
    where?: AdminUserWhereInput;
}
