import { InputJsonValue } from "../../types";
import { VideoUpdateManyWithoutUsersInput } from "./VideoUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramUserId?: string | null;
  profilePictureUrl?: string | null;
  dateJoined?: Date | null;
  userProfilePictureUrl?: string | null;
  telegramId?: string | null;
  profilePhotoUrl?: string | null;
  joinedDate?: Date | null;
  videos?: VideoUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
};
