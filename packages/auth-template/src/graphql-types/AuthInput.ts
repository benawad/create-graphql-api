import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
