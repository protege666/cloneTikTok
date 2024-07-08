import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  commentTimestamp?: DateTimeNullableFilter;
  commentText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  video?: VideoWhereUniqueInput;
};
