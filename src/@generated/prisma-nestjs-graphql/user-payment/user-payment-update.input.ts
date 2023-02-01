import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneWithoutUserPaymentsNestedInput } from '../user/user-update-one-without-user-payments-nested.input';

@InputType()
export class UserPaymentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    paymentType?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    provider?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    account?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutUserPaymentsNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutUserPaymentsNestedInput;
}
