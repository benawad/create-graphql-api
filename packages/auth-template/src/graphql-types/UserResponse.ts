import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./FieldError";
import { User } from "../entity/User";

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
