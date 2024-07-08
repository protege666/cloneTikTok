import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type VideoWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
  fileUrl?: StringNullableFilter;
  views?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  likes?: LikeListRelationFilter;
  comments?: CommentListRelationFilter;
};
