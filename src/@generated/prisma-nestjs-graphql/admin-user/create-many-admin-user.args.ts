import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUserCreateManyInput } from './admin-user-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminUserArgs {

    @Field(() => [AdminUserCreateManyInput], {nullable:false})
    @Type(() => AdminUserCreateManyInput)
    data!: Array<AdminUserCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
