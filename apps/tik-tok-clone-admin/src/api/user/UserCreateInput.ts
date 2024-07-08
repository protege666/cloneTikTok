import { InputJsonValue } from "../../types";
import { VideoCreateNestedManyWithoutUsersInput } from "./VideoCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramUserId?: string | null;
  profilePictureUrl?: string | null;
  dateJoined?: Date | null;
  userProfilePictureUrl?: string | null;
  telegramId?: string | null;
  profilePhotoUrl?: string | null;
  joinedDate?: Date | null;
  videos?: VideoCreateNestedManyWithoutUsersInput;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
};
