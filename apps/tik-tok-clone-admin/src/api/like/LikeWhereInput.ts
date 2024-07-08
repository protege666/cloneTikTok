import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  likeTimestamp?: DateTimeNullableFilter;
  video?: VideoWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
