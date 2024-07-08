import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  telegramUserId?: StringNullableFilter;
  profilePictureUrl?: StringNullableFilter;
  dateJoined?: DateTimeNullableFilter;
  userProfilePictureUrl?: StringNullableFilter;
  telegramId?: StringNullableFilter;
  profilePhotoUrl?: StringNullableFilter;
  joinedDate?: DateTimeNullableFilter;
  videos?: VideoListRelationFilter;
  likes?: LikeListRelationFilter;
  comments?: CommentListRelationFilter;
};
