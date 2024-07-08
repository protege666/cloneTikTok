import { JsonValue } from "type-fest";
import { Video } from "../video/Video";
import { Like } from "../like/Like";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  telegramUserId: string | null;
  profilePictureUrl: string | null;
  dateJoined: Date | null;
  userProfilePictureUrl: string | null;
  telegramId: string | null;
  profilePhotoUrl: string | null;
  joinedDate: Date | null;
  videos?: Array<Video>;
  likes?: Array<Like>;
  comments?: Array<Comment>;
};
