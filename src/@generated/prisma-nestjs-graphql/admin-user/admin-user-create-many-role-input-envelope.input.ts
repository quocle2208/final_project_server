import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUserCreateManyRoleInput } from './admin-user-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminUserCreateManyRoleInputEnvelope {

    @Field(() => [AdminUserCreateManyRoleInput], {nullable:false})
    @Type(() => AdminUserCreateManyRoleInput)
    data!: Array<AdminUserCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
