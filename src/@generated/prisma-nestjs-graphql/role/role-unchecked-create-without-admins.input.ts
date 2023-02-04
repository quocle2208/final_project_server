import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RoleUncheckedCreateWithoutAdminsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    roleType!: string;

    @Field(() => String, {nullable:false})
    permissions!: string;
}
