import { Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";

@Resolver()
export class BookResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  book() {
    return "The Republic";
  }
}
