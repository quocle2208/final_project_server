import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoleCreateWithoutAdminsInput {

    @Field(() => String, {nullable:false})
    roleType!: string;

    @Field(() => String, {nullable:false})
    permissions!: string;
}
